import { Component, inject, input, Input } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';
import { ProductsCard } from '../../interfaces';


@Component({
  selector: 'product-card',
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  @Input()
  product!: ProductsCard

  @Input()
  buttonContent: string = ''


  ngOnInit(): void {

    console.log(this.product.title)
  }

  get rating() {
    return this.product.rating !== null && this.product.rating !== undefined ? this.product.rating : '-'
  }

}
