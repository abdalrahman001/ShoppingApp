import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateOrderStatusComponent } from './update-order-status.component';
import { FormsModule } from '@angular/forms';

describe('UpdateOrderStatusComponent', () => {
  let component: UpdateOrderStatusComponent;
  let fixture: ComponentFixture<UpdateOrderStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateOrderStatusComponent],
      imports: [FormsModule] // Import FormsModule here
    }).compileComponents();

    fixture = TestBed.createComponent(UpdateOrderStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
