import { Component, OnInit } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { AuthGuard } from '../core/auth.guard';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedIn: boolean = false;
  loginManager: string = "Login";
  constructor(public authServ: AuthService, public authGuard: AuthGuard, public router: Router) { 
    firebase.auth().onAuthStateChanged(user => {
      if(user){
        this.loggedIn  = true;
        this.loginManager = "Log Out";
      } else {
        this.loggedIn = false;
        this.loginManager = "Login";

      }
    })
  }

  ngOnInit() {
  }

  nav(){

    if(this.loggedIn){
      this.authServ.signOut();
    }
    else {
     // this.router.navigate["login"];
     this.router.navigate(["login"]); 
     console.log(this.loginManager, this.loggedIn);

    }
    
  }

}
