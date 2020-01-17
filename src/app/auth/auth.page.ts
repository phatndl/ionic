import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { LoadingController } from '@ionic/angular';
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
    private loadingCtrl: LoadingController
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
      setTimeout(() => {
        // resetset loading
        this.isLoading = false;
        this.authService.login();
        this.loadingCtrl.dismiss();
        this.router.navigateByUrl("/places/tabs/discover"); 
      }, 1500);
    })
  }

  onSubmit(form: NgForm) {
    if (!form.valid){
      return;
    }
    const { email, password } = form.value;
    console.log("email password: ", email, password);
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

}
