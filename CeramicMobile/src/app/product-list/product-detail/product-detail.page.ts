import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private dataServ: DatabaseService ) { }

  productItem: any;
  quanToShow: number = 1;
  priceToShow: number ;

  ngOnInit() {

    this.route.params.subscribe(
      (params: Params) => {
       
        console.log( +params['id']);
        this.productItem = this.dataServ.getProduct(params['id']);      
        console.log(this.productItem);
          
      }
    );
  }

  priceResolver(){
    this.priceToShow = this.quanToShow * this.productItem.price;
  }

  plusQuan() {
    this.quanToShow = this.quanToShow + 1;
    this.priceResolver();
  }

  minusQuan() {
    if (this.quanToShow > 1 && this.quanToShow - 1 >= 1) {
      this.quanToShow = this.quanToShow - 1;
      this.priceResolver();

    }
  }

  addToCart(){
    this.dataServ.addToCart(this.productItem, this.quanToShow)
  }

}
