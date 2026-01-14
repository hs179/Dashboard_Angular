import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private http = inject(HttpClient);

  getProductCatalogData(): Observable<any> {
    // Define the two requests
    const categories$ = this.http.get('https://dummyjson.com/products/category-list');
    const products$ = this.http.get('https://dummyjson.com/products/category/smartphones');

    // forkJoin them together
    return forkJoin({
      categoryNames: categories$,
      productData: products$
    });
  }
}