import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { ProductsCard } from '../interfaces';

const url = 'http://localhost:3000/api/product'

interface Pagination {
  limit?: number;
  offset?: number;
}


@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  private http = inject(HttpClient);

  getRandomProducts(pagination: Pagination) {
    let params = new HttpParams()
    if(pagination.limit !== undefined){
      params = params.set('limit', pagination.limit.toString())
    }
    if(pagination.offset !== undefined){
      params = params.set('offset', pagination.offset.toString())
    }



    return this.http.get<ProductsCard[]>(`${url}/random`, {
      params,
    });
  }
}
