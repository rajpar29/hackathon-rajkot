import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string;
  password:string;

  constructor(public authService: AuthService, public router: Router) {
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.router.navigate['/createAssignment'];
      } 
    })
   }

  ngOnInit() {
  }
  loginEmailPass(){
    console.log(this.email, this.password);
    this.authService.loginEmailPass(this.email,this.password);
  }

}
