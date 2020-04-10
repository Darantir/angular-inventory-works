import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { Product} from '../product';

@Component({
  selector: 'app-products-image',
  templateUrl: './products-image.component.html',
  styleUrls: ['./products-image.component.css']
})
export class ProductsImageComponent implements OnInit {
  @Input() product: Product;
  @HostBinding('attr.class') cssClass = 'ui small image';
  constructor() { }

  ngOnInit() {
  }

}