import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dataServ: DatabaseService ) {

   }

   productItem: any;

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
       
        console.log( +params['id']);
        this.productItem = this.dataServ.getProduct(params['id']);      
        console.log(this.productItem);
          
      }
    );
  
  }

}
