import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from 'src/app/models/Product';
import { PRODUCTS } from 'src/app/models/datastore/mock-products';

// Session 25 ini akan bersinggungan dengan routing dan services.
// Services merupakan bagian reusable pada Angular yang akan kita gunakan
// untuk berhubungan dengan data yang di-store pada server kita.

// Services ini akan berkaitan erat sekali dengan dependency injection,
// yang dapat kalian temukan konsepnya pada artikel berikut:
// https://angular.io/guide/architecture-services

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products = of(PRODUCTS)

  constructor() { }

  getProducts (): Observable<Product[]> {
    return this.products
  }

  getOneProduct (id: number): Observable<Product> {
    return this.products
      .pipe(
        map(
          products => {
            return products.filter(p => {
              return p.id == id
            })[0]
          }
        )
      )
  }
}
