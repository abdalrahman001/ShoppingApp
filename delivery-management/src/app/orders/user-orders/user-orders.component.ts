import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders' +
    '.component.html',
  standalone: true,
  styleUrls: ['./user-orders.component.scss']
})
export class UserOrdersComponent implements OnInit {
  orders: any[] = [];  // Stores the list of orders

  constructor(
    private orderService: OrderService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchUserOrders();  // Fetch orders when the component is initialized
  }

  // Fetch orders for the user (you can modify this to call the proper API for your app)
  fetchUserOrders(): void {
    // Example service call: you need to implement the method in OrderService

  }

  // Method to delete an order
  deleteOrder(orderId: number): void {
    this.orderService.deleteOrder(orderId).subscribe({
      next: (response) => {
        console.log('Order deleted successfully', response);
        // After deletion, refresh the orders list
        this.fetchUserOrders();
      },
      error: (err) => {
        console.error('Error deleting order', err);
      }
    });
  }
}
