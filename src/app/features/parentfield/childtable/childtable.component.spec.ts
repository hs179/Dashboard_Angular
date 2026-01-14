import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildtableComponent } from './childtable.component';

describe('ChildtableComponent', () => {
  let component: ChildtableComponent;
  let fixture: ComponentFixture<ChildtableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildtableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildtableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
