import { Component, OnInit } from '@angular/core';
import { AuthService, AuthResponseData } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})


export class AuthPage implements OnInit {
  isLoading: boolean;
  isLoginMode: boolean = true;
  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingCtrl: LoadingController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
  }

  onLogin() {
    // set loading
    this.isLoading = true;
    this.loadingCtrl.create({
      keyboardClose: true,
      message: "logging in..."
    }).then(loadingEl => {
      loadingEl.present();
      // setTimeout(() => {
      //   // resetset loading
      //   this.isLoading = false;
      //   this.authService.login();
      //   this.loadingCtrl.dismiss();
      //   this.router.navigateByUrl("/places/tabs/discover"); 
      // }, 1500);
    })
  }

  private showAlert(message: string) {
    this.alertCtrl.create({
      header: "Authenication Failed",
      message,
      buttons: ["Okay"]
    }).then(alertEl => alertEl.present());
  }

  onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const { email, password } = form.value;
    console.log("email password: ", email, password);
    let authObs: Observable<AuthResponseData>;
    if (this.isLoginMode){
      authObs = this.authService.login(email, password);
    }
    else{
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(resData => {
      this.isLoading = false;
      this.loadingCtrl.dismiss();
      this.router.navigateByUrl("/places/tabs/discover"); 
      console.log(resData);
    }, err => {
      const code = err.error.error.message;
      let message = "Coundn't sign up, please try";
      if (code === "EMAIL_EXIST"){
        message = code;
      } else if (code === "EMAIL_NOT_FOUND") {
        message = code;
      }
      else {
        message = code;
      }
      this.isLoading = false;
      this.loadingCtrl.dismiss();
      this.showAlert(message);
    })
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
