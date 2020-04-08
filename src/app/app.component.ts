import { Component } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})


export class AppComponent  {
  product: Product;

  constructor(){
    let newProduct = new Product('NICEHAT',
    'A Nice Black Hat',
    '/resources/images/products/black-hat.jpg',
    ['Men','Accesories','Hats'],
    29.99);

    this.product = newProduct;
  }

  name = 'Angular';
}
