import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {

  constructor() { }


  public cartArray = signal<any[]>([]);
  public cartItemCount = computed(() => this.cartArray().length);

}

