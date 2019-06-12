import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../../services/database.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {


  cartProductList: any = [];
  totalPrice:number = 0;

  constructor(public dataServ: DatabaseService, public router: Router) {

    this.cartProductList = [];
    this.cartProductList = dataServ.getCartProductList();
    console.log(this.cartProductList);

   
   }

   totalPriceCalc(){
    for(var i = 0; i <this.cartProductList.length; i++ ){
      this.totalPrice = this.totalPrice + (this.cartProductList[i].price * this.cartProductList[i].orderQuantity)
    }
    return this.totalPrice;
   }

  ngOnInit() {
  }

  buyNow() {
    this.router.navigate(['buy']);
  }
  listEmpty(){
    if(this.cartProductList.length == 0 || this.cartProductList == null){
      return true;
    } else {
      return false;
    }
  }

}
