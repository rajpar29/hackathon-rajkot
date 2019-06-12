import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent implements OnInit {

  constructor() { }

  @Input() productItem;

  @Input() index: number;

  ngOnInit() {
  }

  navToDetail() {
    // this.router.navigate(['/id',{'id': this.index}]);
}

}
