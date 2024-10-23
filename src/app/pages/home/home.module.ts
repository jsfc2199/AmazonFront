import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ImgCarouselComponent } from './components/img-carousel/img-carousel.component';
import { ProductsModule } from '../products.module';



@NgModule({
  declarations: [
    HomeLayoutComponent,
    ImgCarouselComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule,
    ProductsModule
  ]
})
export class HomeModule { }
