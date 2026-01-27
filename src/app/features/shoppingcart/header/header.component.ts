import { Component, computed, inject, signal } from '@angular/core';
import { CommonDataService } from '../common-data.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private _service = inject(CommonDataService)
  count = computed(() => this._service.cartItemCount())




}
