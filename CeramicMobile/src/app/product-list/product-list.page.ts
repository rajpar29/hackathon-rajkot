import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.page.html',
  styleUrls: ['./product-list.page.scss'],
})
export class ProductListPage implements OnInit {

  productList: any = [];


  constructor(db: AngularFireDatabase, dataService: DatabaseService) {
    this.productList = [];
    this.productList = dataService.getProductList();
    console.log(this.productList);
    

  }

  ngOnInit() {
  }

}
