import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddToOrderComponent } from './add-to-order.component';

describe('AddToOrderComponent', () => {
  let component: AddToOrderComponent;
  let fixture: ComponentFixture<AddToOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddToOrderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddToOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
