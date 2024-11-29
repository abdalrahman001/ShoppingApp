import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';  // Import OrderService
import { ActivatedRoute, Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';  // Import ActivatedRoute for getting orderId

@Component({
  selector: 'app-update-order',
  templateUrl: './update-order.component.html',
  styleUrls: ['./update-order.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class UpdateOrderComponent implements OnInit {
  orderId: string = '';  // Holds the orderId from the route
  orderDetails: any = {};  // Holds the order data for display and update
  loading: boolean = true;
  error: string | null = null;

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.orderId = this.route.snapshot.paramMap.get('orderId') || '';  // Get orderId from route params
    if (this.orderId) {
      this.fetchOrderDetails(this.orderId);
    }
  }

  fetchOrderDetails(orderId: string): void {
    // Fetch the order details using the service
    // Assume the service method to fetch the order is implemented

    this.loading = false;  // Disable loading once data is fetched
    this.orderDetails = {
      _id: orderId,
      pickupLocation: 'Sample Pickup Location',
      dropOffLocation: 'Sample Dropoff Location',
      status: 'In transit',  // Example field
    };
  }

  updateOrder(): void {
    if (this.orderDetails) {
      this.orderService.updateOrder(this.orderId, this.orderDetails).subscribe(
        (response) => {
          console.log('Order updated successfully:', response);
          this.router.navigate(['/orders']);  // Navigate to orders list page after update
        },
        (error) => {
          console.error('Error updating order:', error);
          this.error = 'Failed to update order';
        }
      );
    }
  }
}
