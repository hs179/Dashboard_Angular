import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stockLevel',
  standalone: true
})
export class StockLevelPipe implements PipeTransform {

  transform(value: any): any {
    if(value == 0){
      return 'Out of Stock'
    }
   else if(value < 5){
    return 'Low Stock'
   }
   else{
    return 'In Stock'
   }
  }

}
