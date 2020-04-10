import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRowComponent } from './products-row/products-row.component';
import { ProductsImageComponent } from './products-image/products-image.component';
import { PriceDisplayComponent } from './price-display/price-display.component';
import { ProductRowComponent } from './product-row/product-row.component';
import { ProductDepartmentComponent } from './product-department/product-department.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductsListComponent, ProductsRowComponent, ProductsImageComponent, PriceDisplayComponent, ProductRowComponent, ProductDepartmentComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
