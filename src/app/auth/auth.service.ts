import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  constructor(
  ) { }

  get isAuthen() {
    return this.isAuthenticated;
  }

  send(phoneNumber: string) {
    return new Promise((resolve, reject) => {
      (<any>window).FirebasePlugin.verifyPhoneNumber((credential) => {
        console.log("credential: ", credential);
        // get verification id
        resolve(credential.verificationId);
      }, (error) => {
        reject(error);
      }, phoneNumber, 60);
    })
  }

  // calling send method getting verificationId
  verify(verificationId: string, verificationCode: string) {
    return new Promise((resolve, reject) => {
      (<any>window).FirebasePlugin.signInWithCredential(verificationId, verificationCode, () => {
          // set isAuthen
          this.isAuthenticated = true;
          resolve(true);
      }, (error) => {
          // reset isAuthen
          this.isAuthenticated = false;
          reject(error);
      });
    })
  }
  
}
