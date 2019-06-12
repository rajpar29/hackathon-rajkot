import { Component, OnInit } from '@angular/core';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {
  productList: any = [];


  constructor(dataService: DatabaseService) {
    this.productList = [];
    this.productList = dataService.getOrderProductList();
    console.log(this.productList);

   }

  ngOnInit() {
  }

}
