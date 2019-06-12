import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() productItem;

  @Input() index: number;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navToDetail() {
    this.router.navigate(['/id',{'id': this.index}]);
}

}
