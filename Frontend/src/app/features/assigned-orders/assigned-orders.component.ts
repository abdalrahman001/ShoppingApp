import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// @ts-ignore
import { Order } from "../modules/order.modules"; // Updated import path

@Component({
  selector: 'app-assigned-orders',
  templateUrl: './assigned-orders.component.html',
  styleUrls: ['./assigned-orders.component.css']
})
export class AssignedOrdersComponent implements OnInit {
  assignedOrders: Order[] = []; // Use the Order interface

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAssignedOrders();
  }

  getAssignedOrders() {
    this.http.get<Order[]>('http://localhost:3000/api/orders/assigned')
      .subscribe(response => {
        this.assignedOrders = response;
      }, error => {
        console.error(error);
      });
  }

  acceptOrder(orderId: string) {
    this.http.post(`http://localhost:3000/api/orders/accept/${orderId}`, {})
      .subscribe(response => {
        console.log('Order accepted:', response);
        this.getAssignedOrders(); // Refresh the list
      }, error => {
        console.error(error);
      });
  }

  declineOrder(orderId: string) {
    this.http.post(`http://localhost:3000/api/orders/decline/${orderId}`, {})
      .subscribe(response => {
        console.log('Order declined:', response);
        this.getAssignedOrders(); // Refresh the list
      }, error => {
        console.error(error);
      });
  }
}
