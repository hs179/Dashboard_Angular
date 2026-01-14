import { computed, Injectable, signal } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferdataService {

  constructor() { }

  subject$ = new Subject<string>();

  searchSignal = signal<string>('');
  searchCount = signal<number>(0);
  searchHistory = signal<string[]>([]);


  searchLength = computed(() => this.searchSignal().length);

  updateSearch(value:string){
    this.searchSignal.set(value);
    this.searchCount.update(count => count + 1);
    this.searchHistory.update(history =>
      [value, ...history].slice(0, 5)
    );
  }

}
