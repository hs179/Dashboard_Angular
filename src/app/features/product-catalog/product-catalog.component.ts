import { Component, inject } from '@angular/core';
import { ProductService } from '../../core/services/product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-catalog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-catalog.component.html',
  styleUrl: './product-catalog.component.scss'
})
export class ProductCatalogComponent {

  private productService = inject(ProductService);

  categories: string[] = [];
  products: any[] = [];
  isLoading = true;
  errorMessage = '';

  ngOnInit() {
    this.productService.getProductCatalogData().subscribe({
      next: (res) => {
        this.categories = res.categoryNames;
        this.products = res.productData.products; // Access .products from the API response
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = "Failed to load data";
        this.isLoading = false;
      }
    });
  }
}
