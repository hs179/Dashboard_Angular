import { Component, OnInit } from '@angular/core';
import { StockLevelPipe } from '../../shared/pipes/stock-level.pipe';
import { CommonModule } from '@angular/common';
import { BaseButtonComponent } from 'my-shared-lib';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [StockLevelPipe, CommonModule, BaseButtonComponent],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.scss'
})
export class StockComponent implements OnInit {

  products = [
    { id: 1, name: 'MacBook Pro 14"', category: 'Laptops', stock: 10, price: 1999, img: 'https://picsum.photos/id/0/200/150' },
    { id: 2, name: 'Logitech MX Master 3S', category: 'Accessories', stock: 3, price: 99, img: 'https://picsum.photos/id/2/200/150' },
    { id: 3, name: 'Mechanical Keyboard', category: 'Accessories', stock: 0, price: 150, img: 'https://picsum.photos/id/119/200/150' },
    { id: 4, name: 'Dell UltraSharp 27"', category: 'Monitors', stock: 2, price: 549, img: 'https://picsum.photos/id/201/200/150' },
    { id: 5, name: 'Sony WH-1000XM5', category: 'Audio', stock: 7, price: 399, img: 'https://picsum.photos/id/3/200/150' },
    { id: 6, name: 'iPhone 15 Pro', category: 'Phones', stock: 1, price: 999, img: 'https://picsum.photos/id/160/200/150' },
  ];


  ngOnInit(): void {
  }

  handleSave() {
    console.log("Saving data to Database...");
  }


}
