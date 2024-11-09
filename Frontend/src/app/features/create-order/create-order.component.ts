// create-order.component.ts
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  pickupLocation!: string;
  dropoffLocation!: string;
  packageDetails!: string;
  deliveryTime!: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const order = {
      pickupLocation: this.pickupLocation,
      dropoffLocation: this.dropoffLocation,
      packageDetails: this.packageDetails,
      deliveryTime: this.deliveryTime
    };
    
    this.http.post('http://localhost:3000/api/orders', order)
      .subscribe(response => {
        console.log(response);
        // Handle successful order creation
      }, error => {
        console.error(error);
        // Handle error
      });
  }
}
