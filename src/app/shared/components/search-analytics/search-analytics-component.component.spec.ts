import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAnalyticsComponentComponent } from './search-analytics-component.component';

describe('SearchAnalyticsComponentComponent', () => {
  let component: SearchAnalyticsComponentComponent;
  let fixture: ComponentFixture<SearchAnalyticsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAnalyticsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAnalyticsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
