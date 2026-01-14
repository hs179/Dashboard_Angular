import { Component, inject } from '@angular/core';
import { TransferdataService } from '../../../core/services/transferdata.service';

@Component({
  selector: 'app-search-analytics-component',
  standalone: true,
  imports: [],
  templateUrl: './search-analytics-component.component.html',
  styleUrl: './search-analytics-component.component.scss'
})
export class SearchAnalyticsComponentComponent {
  service = inject(TransferdataService);

}
