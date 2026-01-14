import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {
  products: any[] = [];
  limit = 12; // 12 items (4 rows of 3)
  skip = 0;
  loading = false;
  private scrollSub?: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadProducts(); // Load first batch

    // Listen to window scroll
    this.scrollSub = fromEvent(window, 'scroll')
      .pipe(debounceTime(200)) 
      .subscribe(() => this.onScroll());
  }

  loadProducts() {
    if (this.loading) return;

    this.loading = true;
    const url = `https://dummyjson.com/products?limit=${this.limit}&skip=${this.skip}`;

    this.http.get<any>(url).subscribe((res) => {
      this.products = [...this.products, ...res.products]; // Merge arrays
      this.skip += this.limit; // Prepare next offset
      this.loading = false;
    });
  }

  onScroll() {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
    const max = document.documentElement.scrollHeight;

    // If we are within 300px of the bottom, load more
    if (pos > max - 300) {
      this.loadProducts();
    }
  }

  ngOnDestroy() {
    this.scrollSub?.unsubscribe();
  }
}