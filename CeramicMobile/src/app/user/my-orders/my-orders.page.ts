import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {


  cartProductList: any = [];
  constructor(public dataServ: DatabaseService, public router: Router) {
    this.cartProductList = [];
    this.cartProductList = dataServ.getOrderProductList();
   }

  ngOnInit() {
  }
  listEmpty(){
  if(this.cartProductList.length == 0 || this.cartProductList == null){
    return true;
  } else {
    return false;
  }
}

}
