import { Component, inject } from '@angular/core';


import { take } from 'rxjs';
import { ProductsCard } from '../../interfaces';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent {
  public products: ProductsCard[] = [];
  productService = inject(ProductService);

  ngOnInit(): void {
    this.loadRandomProducts();
  }

  //TODO Cargar los primeros 4 productos basados en el historial del usuario
  loadRandomProducts() {
    const pagination = {limit: 4, offset:75}
    this.productService.getRandomProducts(pagination)

    .subscribe((products) => {
      console.log(products);
      this.products = products;
    });
  }
}
