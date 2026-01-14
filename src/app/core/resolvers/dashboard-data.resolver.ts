import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { delay } from 'rxjs';

export const dashboardDataResolver: ResolveFn<boolean> = (route, state) => {

  const http = inject(HttpClient)

  const url = `https://dummyjson.com/products?limit=10`;

  console.log('Resolver fetching data...');
  return http.get<any>(url);
};
