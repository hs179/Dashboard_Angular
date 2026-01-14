import { Component, ContentChild, ElementRef, inject, OnInit } from '@angular/core';
import { CardComponentComponent } from '../../shared/components/card/card-component.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { debounceTime, delay, interval, Observable, Subject } from 'rxjs';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TransferdataService } from '../../core/services/transferdata.service';
import { SearchAnalyticsComponentComponent } from '../../shared/components/search-analytics/search-analytics-component.component';

@Component({
  selector: 'app-parent-component',
  standalone: true,
  imports: [CardComponentComponent, HttpClientModule, CommonModule, SearchAnalyticsComponentComponent, NgOptimizedImage],
  templateUrl: './parent-component.component.html',
  styleUrl: './parent-component.component.scss'
})
export class ParentComponentComponent implements OnInit {

  private _http = inject(HttpClient)
  private _service = inject(TransferdataService)

  URL = "https://fakestoreapi.com/products";

  // data$:any
  // filterdata : any
  // ngOnInit(): void {
  //   this._http.get(this.URL).pipe(delay(10000)).subscribe( data => {
  //     this.data$ = data
  //     this.filterdata = data
  //   })

  //   this._service.subject$.pipe(debounceTime(2000)).subscribe((value)=> {
  //   this.filterdata = this.data$.filter((current:any) => current.title.toLowerCase().includes(value.toLowerCase()))
  //   })
  // }

  // Initialize as null so @if (!filterdata) triggers the skeleton
  data$: any = null;
  filterdata: any = null;

  ngOnInit(): void {
    this._http.get(this.URL).pipe(
      delay(5000) // Reduced to 5s for better UX testing
    ).subscribe(data => {
      this.data$ = data;
      this.filterdata = data;
    });

    this._service.subject$.pipe(debounceTime(500)).subscribe((value) => {
      if (this.data$) {
        this.filterdata = this.data$.filter((current: any) =>
          current.title.toLowerCase().includes(value.toLowerCase())
        );
      }
    });
  }





}
