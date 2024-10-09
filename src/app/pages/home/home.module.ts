import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { HomeLayoutComponent } from './home-layout/home-layout.component';
import { ImgCarouselComponent } from './components/img-carousel/img-carousel.component';


@NgModule({
  declarations: [
    HomeLayoutComponent,
    ImgCarouselComponent,
    //TODO: Product components
    // ProductCardComponent,
    // ProductListComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    TranslateModule
  ]
})
export class HomeModule { }
