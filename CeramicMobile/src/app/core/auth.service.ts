import { Injectable } from '@angular/core';
import {Router} from '@angular/router';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Platform, LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: Observable<firebase.User>;
  constructor(private afAuth: AngularFireAuth,
              private platform: Platform,
              private lodingCtrl: LoadingController,
              private router: Router,
              private toastCtrl: ToastController) {
    this.user = this.afAuth.authState;
  }

  googleLogin() {
    if (this.platform.is('cordova')) {
      // this.nativeGoogleLogin();
    } else {
      this.webGoogleLogin();
    }
  }

   async nativeGooleLogin(): Promise<void> {

  }

 async webGoogleLogin() {
   try {
    
     const provider = new firebase.auth.GoogleAuthProvider();
     const credential = await this.afAuth.auth.signInWithPopup(provider).then(res=> {
       this.router.navigate(["tabs-page"]);
     },
    async err=> {
     const toast  = await this.toastCtrl.create({message:err.toString() , duration: 3000});
     toast.present();
    });
   } catch (err) {
     console.log(err);
   }
 }
 signOut() {
   this.afAuth.auth.signOut()
   .then(()=> {
    this.router.navigate(["login"]);

   });
 }


}
