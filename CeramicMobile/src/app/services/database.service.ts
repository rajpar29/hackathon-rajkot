import { Injectable } from '@angular/core'; 

import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  items: Observable<any[]>;
  productList = [];
  cartProductList = [];
  orderProductList = []


  constructor(private db: AngularFireDatabase, private toastCtrl: ToastController) {   }

  createProduct(product: any){
    console.log(product);
    
    var database = firebase.database();
    var ref = database.ref("products").child(product.categ).push(...product);
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

  getProduct(index: number) {
    return this.productList[index];
  }

  addToCart(prodItem: any, quantity:number) {
    let ref = firebase.database().ref().child("users").child(firebase.auth().currentUser.uid).child("cart").child(prodItem.prodId).set({
      "title": prodItem.title,
      "description": prodItem.description,
      "categ": prodItem.categ,
      "price": prodItem.price,
      "quantity": prodItem.quantity,
      "imageUrl": prodItem.imageUrl,
      "timestamp": new Date().getTime(),
      "prodId": prodItem.prodId,
      "orderQuantity": quantity
    }).then(async res=> {
     const toast = await this.toastCtrl.create({message:"Added to cart successfully",duration: 3000})
     toast.present();
    },
    async err=> {
      const toast = await this.toastCtrl.create({message:err,duration: 3000})
      toast.present();
    });
  }

  getCartProductList() {

    this.cartProductList = [];
    this.db.list(`users/${firebase.auth().currentUser.uid}/cart`).valueChanges().forEach(categories => {
      categories.forEach(product=> {
        this.cartProductList.push(product);
      })    
      });

      return this.cartProductList;
  }


   placeOrder(){
    var cartList
    console.log("executed");
    var ref = firebase.database().ref("users").child(firebase.auth().currentUser.uid).child("cart");
    ref.on('value',
      snap=> {
          cartList = snap.val();
      });
      var keys = Object.keys(cartList);
      console.log(keys, cartList[keys[0]] );

      for(var i = 0; i<keys.length; i++){
        let ref1 = firebase.database().ref("orders_received").push(cartList[keys[i]]);

        let ref = firebase.database().ref("users").child(firebase.auth().currentUser.uid).child("orders").push(cartList[keys[i]]).then(()=>{
        });
        
      }
      firebase.database().ref("users").child(firebase.auth().currentUser.uid).child("cart").remove().then(async res => {
        const toast = await this.toastCtrl.create({message:"Order Placed!!",duration: 3000})
        toast.present();
  
      },
    async err => {
      const toast = await this.toastCtrl.create({message:"err",duration: 3000})
      toast.present();

    });
      

  }

  getOrderProductList() {
    this.orderProductList = [];
    this.db.list(`users/${firebase.auth().currentUser.uid}/orders`).valueChanges().forEach(categories => {
      categories.forEach(product=> {
        this.orderProductList.push(product);
      })    
      });

      return this.orderProductList;
  }

  removeItem(index:number) {
    console.log(this.cartProductList);
    console.log(this.cartProductList[index]);

    
    firebase.database().ref("users").child(firebase.auth().currentUser.uid).child("cart").child(this.cartProductList[index].prodId).remove();
  }
}
