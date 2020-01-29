import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { User } from './auth.model';


export interface AuthResponseData {
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered?: boolean
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userIsAuthenticated = false;
  private _userId = 'abc';
  private _user = new BehaviorSubject<User>(null);
  constructor(
    private http: HttpClient,
  ) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.firebaseAPIKey}`, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(resData => this.setUser(resData)))
  }

  get userIsAuthenticated() {
    return this._user.asObservable().pipe(map(user => {
      if (user){
        return !!user.token;
      }
      return false;
    }));
    // return this._userIsAuthenticated;
  }

  get userId() {
    return this._user.asObservable().pipe(map(user => {
      if (user){
        return user.id;
      }
      return null;
    }));
  }

  login(email: string, password: string) {
    // this._userIsAuthenticated = true;
    return this.http.post<AuthResponseData>(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.firebaseAPIKey}`, {
      email,
      password,
      returnSecureToken: true
    }).pipe(tap(resData => this.setUser(resData)));
  }

  logout() {
    // this._userIsAuthenticated = false;
    this._user.next(null);
  }

  private setUser(userData: AuthResponseData) {
    const expirationTime = new Date(new Date().getTime() + (+userData.expiresIn * 1000)); 
    this._user.next(new User(userData.localId, userData.email, userData.idToken, expirationTime)); 
  }
}
