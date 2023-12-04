import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Products, ProductResponse } from '../models/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  url: string = 'https://dummyjson.com/products';
  prefList: Products[] = [];
  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get<ProductResponse>(this.url);
  }

  getFavourites(product: Products) {
    this.prefList.push(product);
  }

  getPrefList() {
    return this.prefList;
  }
}
