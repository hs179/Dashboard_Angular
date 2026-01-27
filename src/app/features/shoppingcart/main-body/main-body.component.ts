import { Component, inject, signal } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CheckoutComponent } from '../checkout/checkout.component';

import { CommonModule } from '@angular/common';
import { CommonDataService } from '../common-data.service';

@Component({
  selector: 'app-main-body',
  standalone: true,
  imports: [HeaderComponent, CheckoutComponent, CommonModule],
  templateUrl: './main-body.component.html',
  styleUrl: './main-body.component.scss'
})
export class MainBodyComponent {

  private _service = inject(CommonDataService)
  products = [
    { id: 1, name: 'Premium Wireless Headphones', price: 199, image: '🎧' },
    { id: 2, name: 'Smart Fitness Tracker', price: 129, image: '⌚' },
    { id: 3, name: 'Minimalist Leather Wallet', price: 45, image: '👛' },
    { id: 4, name: 'Mechanical Gaming Keyboard', price: 159, image: '⌨️' },
    { id: 5, name: 'Ergonomic Office Chair', price: 299, image: '🪑' },
    { id: 6, name: 'High-Res Digital Camera', price: 899, image: '📷' }
  ];

  addtocart(product: any) {
    this._service.cartArray.update(cart => {
      const index = cart.findIndex(item => item.id === product.id);

      // Product already exists → increment countproduct
      if (index !== -1) {
        return cart.map((item, i) =>
          i === index
            ? { ...item, countproduct: item.countproduct + 1 }
            : item
        );
      }

      // New product → add it to the existing array
      return [...cart, { ...product, countproduct: 1 }];
    });

    // Update the total item count for the header badge
    console.log(this._service.cartArray());
  }

}
