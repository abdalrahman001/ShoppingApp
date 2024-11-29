import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // To fetch order ID from the URL
import { OrderService } from '../../order.service';
import {CommonModule} from '@angular/common'; // OrderService to handle the API call

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OrderDetailsComponent implements OnInit {
  orderId: string | undefined;
  orderDetails: any;  // Store the order details
  loading: boolean = true;  // For showing a loading state
  error: string | null = null;  // Error state

  constructor(
    private route: ActivatedRoute,  // To get the order ID from the URL
    private orderService: OrderService  // To interact with the Order API
  ) {}

  ngOnInit(): void {
    // Getting the order ID from the URL parameters
    this.orderId = this.route.snapshot.paramMap.get('id') || '';

    // Fetching the order details by calling the OrderService
    if (this.orderId) {
      this.orderService.getOrderById(this.orderId).subscribe(
        (response) => {
          this.orderDetails = response;  // Storing the order details
          this.loading = false;  // Data has been loaded
        },
        (error) => {
          console.error('Error fetching order details:', error);
          this.error = 'Failed to fetch order details.';
          this.loading = false;
        }
      );
    }
  }
}
