import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-my-orders-item',
  templateUrl: './my-orders-item.component.html',
  styleUrls: ['./my-orders-item.component.scss']
})
export class MyOrdersItemComponent implements OnInit {

  @Input() productItem;

  @Input() index: number;
 


  constructor(private router: Router) {
   
   }

 

  ngOnInit() {
  }
  navToDetail(){}
  


}
