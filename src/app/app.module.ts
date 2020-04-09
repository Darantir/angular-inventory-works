import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsRowComponent } from './products-row/products-row.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ProductsListComponent, ProductsRowComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
