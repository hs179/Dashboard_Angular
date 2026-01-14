import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentfieldComponent } from './parentfield.component';

describe('ParentfieldComponent', () => {
  let component: ParentfieldComponent;
  let fixture: ComponentFixture<ParentfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ParentfieldComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ParentfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
