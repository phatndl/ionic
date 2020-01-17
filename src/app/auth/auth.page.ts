import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
})
export class AuthPage implements OnInit {
  verificationId: string;
  verifyCode: any;
  phoneNumber: any;
  prefixCountry: string="+84";
  constructor(
    private authService: AuthService,
    private alertCtrl: AlertController,
    private router: Router
  ) {}

  ngOnInit() {};

  send() {
    this.authService.send(this.prefixCountry + this.phoneNumber)
    .then( (verificationId: string) => this.verificationId = verificationId)
    .catch(err => {
      this.alertCtrl.create({
        header: "Error",
        message: err,
        buttons: [
          {
            text: "OK",
            role: "OK"
          }
        ]
      }).then(alertEl => alertEl.present());
    })
  }

  verify() {
    this.authService.verify(this.verificationId, this.verifyCode)
    .then(() => {
      this.router.navigateByUrl("/home");
    })
    .catch(err => {
      this.alertCtrl.create({
        header: "Error",
        message: err,
        buttons: [
          {
            text: "OK",
            role: "OK"
          }
        ]
      }).then(alertEl => alertEl.present());
    })
  }
}
