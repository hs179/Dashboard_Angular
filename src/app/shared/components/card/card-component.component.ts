import { AfterContentChecked, AfterContentInit, Component, ContentChild, ContentChildren, ElementRef, inject, QueryList } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransferdataService } from '../../../core/services/transferdata.service';

@Component({
  selector: 'app-card-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './card-component.component.html',
  styleUrl: './card-component.component.scss'
})
export class CardComponentComponent implements AfterContentInit {
  @ContentChildren("titlevalue", { descendants: true }) titvalue!: QueryList<ElementRef>
  _service = inject(TransferdataService)
  valueFromSearch = ""

  ngAfterContentInit(): void {
    // console.log("value printing.....")

    this.titvalue.changes.subscribe(() => {
      this.titvalue.forEach(value => {
        // console.log('value', value.nativeElement.innerText);
      });
    });

  }

  takedata(value: string) {
    this._service.subject$.next(value)
    this._service.updateSearch(value);
  }



}
