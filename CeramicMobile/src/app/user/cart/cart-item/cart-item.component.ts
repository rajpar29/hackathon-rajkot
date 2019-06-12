import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from '../../../services/database.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {


  @Input() productItem;

  @Input() index: number;

  constructor(private router: Router, private dataServ: DatabaseService) { }

  ngOnInit() {
  }

  navToDetail() {
    this.router.navigate(['/id',{'id': this.index}]);
}

removeItem(index:number){
  this.dataServ.removeItem(index);
}

}
