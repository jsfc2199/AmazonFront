import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductCardComponent } from './products/components/product-card/product-card.component';
import { ProductListComponent } from './products/components/product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    ProductCardComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
  ],
  exports: [
    ProductCardComponent,
    ProductListComponent
  ]
})
export class ProductsModule { }
