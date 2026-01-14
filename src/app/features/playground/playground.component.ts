import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { error } from 'echarts/types/src/util/log.js';
import { catchError, Observable, of } from 'rxjs';

@Component({
  selector: 'app-playground',
  standalone: true,
  imports: [],
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss'
})
export class PlaygroundComponent implements OnInit {
  ngOnInit() {
  }

  private http = inject(HttpClient)
  URL_category = "https://dummyjson.com/products/category-list"
  URL_smartphones= "https://dummyjson.com/products/category/smartphones"

  productcategory(): Observable<any>{
      const category$ = this.http.get(this.URL_category).pipe(
        catchError(error => {
          console.log(error)
          return of(null)
        }))
    return category$
  }

 




}
