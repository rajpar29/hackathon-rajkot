import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DatabaseService } from '../services/database.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  constructor(private databaseServ: DatabaseService ) { }


  title: string = '';
  description: string = '';
  selectCateg: string = '';
  price: string = '';
  quan: string = '';
  imageUrls = [];
  prodId: string = '';


  ngOnInit() {
  }


  onSubmit(form: NgForm) {
   // console.log(form);
    if(this.imageUrls == null || this.imageUrls.length == 0 ){
      alert("Please Select Images");
      return;
    }
   this.databaseServ.createProduct( 
      {
        "title": this.title,
        "description": this.description,
        "categ": this.selectCateg,
        "price": this.price,
        "quantity": this.quan,
        "imageUrl": this.imageUrls,
        "timestamp": new Date().getTime(),
        "prodId": this.prodId
      }
      );
      this.resetForm();
 }

 geturl($event){
  console.log($event);
  this.imageUrls.push($event);
  
 }

 resetForm(){
  this.title = '';
  this.description = '';
  this.selectCateg = '';
  this.price = '';
  this.quan = '';
  this.imageUrls = [];
  this.prodId = '';


 }

}
