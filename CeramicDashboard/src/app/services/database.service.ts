import { Injectable } from '@angular/core'; 

import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  items: Observable<any[]>;
  productList = [];
  orderProductList = [];

  constructor(private db: AngularFireDatabase) {   }

  createProduct(product: any){
    console.log(product);
    
    var database = firebase.database();
    var ref = database.ref("products").child(product.categ).push(product);
    alert("Product published Successfully");
  }

  getProductList() {
    this.productList = [];
    this.db.list('products').valueChanges().forEach(categories => {
      categories.forEach(category =>{
        var keys = Object.keys(category);
        for(var i = 0; i < keys.length; i++ ){
         this.productList.push(category[keys[i]]);
         console.log(category[keys[i]].imageUrl[0]);
         
        }
      })    
      console.log(this.productList);
      });

      return this.productList;
  }

  getOrderProductList(){
    this.orderProductList = [];
    this.db.list('orders_received').valueChanges().forEach(cate => {
      cate.forEach(prod=> {
        this.orderProductList.push(prod);
        console.log(prod);
      })
     
      });

      return this.orderProductList;    
  }

  getProduct(index: number) {
    return this.productList[index];
  }


}
