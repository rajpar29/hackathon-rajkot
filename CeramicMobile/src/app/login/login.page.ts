import { Component } from '@angular/core';
import { AuthService } from '../core/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(public auth: AuthService, private router: Router) {
    if(auth.user) {
      console.log("already logged in");
      
      router.navigate(['/tabs-page'])
    }

  }




}
