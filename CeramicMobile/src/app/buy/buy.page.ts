import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-buy',
  templateUrl: './buy.page.html',
  styleUrls: ['./buy.page.scss'],
})
export class BuyPage implements OnInit {

  cartProductList: any = [];


  constructor(public dataServ: DatabaseService) { }

  placeOrder() {
   this.dataServ.placeOrder();


  }

  ngOnInit() {
  }

}
