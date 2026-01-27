import { Component, computed, inject, signal } from '@angular/core';
import { CommonDataService } from '../common-data.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-checkout',

  standalone: true,
  imports: [],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss'
})
export class CheckoutComponent {
  private _service = inject(CommonDataService)
  showProduct = this._service.cartArray;
  totalCost = computed(() =>
    this.showProduct().reduce(
      (sum, item) => sum + item.price * item.countproduct,
      0
    )
  );

  taxAmount = computed(() => this.totalCost() * 0.1);
  grandTotal = computed(() => this.totalCost() + this.taxAmount());

}
