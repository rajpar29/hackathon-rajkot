import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/auth.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

  constructor(public router: Router, public authServ: AuthService) { }

  ngOnInit() {
  }

  toCart() {
    this.router.navigate(['/cart'])
  }
  toOrders() {
    this.router.navigate(['/my-orders'])

  }

  logout(){
    this.authServ.signOut();
  }

}
