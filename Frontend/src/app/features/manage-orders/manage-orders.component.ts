// src/app/features/manage-orders/manage-orders.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ManageOrder } from '../../modules/manage-orders.model'; // Import the ManageOrder interface

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent implements OnInit {
  orders: ManageOrder[] = []; // Use the ManageOrder interface

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.http.get<ManageOrder[]>('http://localhost:3000/api/orders') // Adjust the API endpoint as needed
      .subscribe(response => {
        this.orders = response;
      }, error => {
        console.error(error);
      });
  }

  updateOrderStatus(orderId: string, newStatus: string) {
    this.http.patch(`http://localhost:3000/api/orders/${orderId}`, { status: newStatus })
      .subscribe(response => {
        console.log('Order status updated:', response);
        this.getOrders(); // Refresh the list
      }, error => {
        console.error(error);
      });
  }

  deleteOrder(orderId: string) {
    this.http.delete(`http://localhost:3000/api/orders/${orderId}`)
      .subscribe(response => {
        console.log('Order deleted:', response);
        this.getOrders(); // Refresh the list
      }, error => {
        console.error(error);
      });
  }
}
