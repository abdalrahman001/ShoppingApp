import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';  // For common directives like ngIf, ngFor
import { ReactiveFormsModule } from '@angular/forms';
import { OrderService } from '../../order.service';  // OrderService for handling order API
import { Router } from '@angular/router';  // To navigate after order is created

@Component({
  selector: 'app-add-order',
  templateUrl: './add-order.component.html',
  styleUrls: ['./add-order.component.scss'],
  standalone: true,  // Marking the component as standalone
  imports: [CommonModule, ReactiveFormsModule],  // Importing necessary modules
})
export class AddOrderComponent {
  addOrderForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private orderService: OrderService,
    private router: Router
  ) {
    // Initializing form fields with validation
    this.addOrderForm = this.fb.group({
      pickupLocation: ['', Validators.required],
      dropOffLocation: ['', Validators.required],
      packageDetails: ['', Validators.required],
      deliveryTime: ['', Validators.required],
    });
  }

  // Handling form submission
  onSubmit() {
    if (this.addOrderForm.valid) {
      // Sending data to the OrderService for API call
      this.orderService.addNewOrder(this.addOrderForm.value).subscribe(
        (response) => {
          console.log('Order created successfully:', response);
          alert('Order added successfully!');
          this.router.navigate(['/my-orders']);  // Navigate to orders page
        },
        (error) => {
          console.error('Error creating order:', error);
          alert('Failed to create order. Please try again.');
        }
      );
    }
  }
}
