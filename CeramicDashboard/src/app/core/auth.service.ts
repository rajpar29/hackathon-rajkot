import { Injectable } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private router: Router) { 
    this.user = this.afAuth.authState;

  }
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    
    const credential = await this.afAuth.auth.signInWithPopup(provider).then(
      res => { alert("Logged In"); this.router.navigate(["createProduct"]);},
      err => {alert(err);}
    );
    
  }
  
  async loginEmailPass(email:string, password:string) {
    const credential = await this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
      res => { alert("Logged In"); this.router.navigate(["createAssignment"]);},
      err => {alert(err);}
    );
  } 

  signOut() {
    this.afAuth.auth.signOut().then(res => { alert("Logged out"); this.router.navigate(["login"]);} );
  }

}
