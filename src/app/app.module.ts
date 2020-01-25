import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import * as firebase from 'firebase';
import { HeaderComponent } from './home/page-one/header/header.component';
import { MenuComponent } from './home/page-one/menu/menu.component';
import { HomePageModule } from './home/home.module';
// import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
firebase.initializeApp(
  {
    apiKey: "AIzaSyDEuXGF95nSBVFQJDERQkZAW1TsknCZqYQ",
    authDomain: "phone-authen-d25c8.firebaseapp.com",
    databaseURL: "https://phone-authen-d25c8.firebaseio.com",
    projectId: "phone-authen-d25c8",
    storageBucket: "phone-authen-d25c8.appspot.com",
    messagingSenderId: "628399625602",
    appId: "1:628399625602:web:508bb96605df5a5d1f2b9b",
    measurementId: "G-TCMGMZV5ZV"
  }
);
@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(
    { scrollAssist: false, scrollPadding: false }
  ), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
