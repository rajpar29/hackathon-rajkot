import { Component, OnInit } from '@angular/core';

import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { DatabaseService } from '../services/database.service';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: any = [];

  constructor(db: AngularFireDatabase, dataService: DatabaseService) {
    this.productList = [];
    this.productList = dataService.getProductList();
    console.log(this.productList);
    

  }
  ngOnInit() {
  }

}
