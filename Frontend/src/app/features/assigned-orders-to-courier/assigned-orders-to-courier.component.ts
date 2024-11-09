// src/app/features/assigned-orders-to-courier/assigned-orders-to-courier.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AssignedOrderToCourier } from '../../modules/assigned-orders-to-courier.model'; // Import the AssignedOrderToCourier interface

@Component({
  selector: 'app-assigned-orders-to-courier',
  templateUrl: './assigned-orders-to-courier.component.html',
  styleUrls: ['./assigned-orders-to-courier.component.css']
})
export class AssignedOrdersToCourierComponent implements OnInit {
  ordersToCourier: AssignedOrderToCourier[] = []; // Use the AssignedOrderToCourier interface

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getAssignedOrdersToCourier();
  }

  getAssignedOrdersToCourier() {
    this.http.get<AssignedOrderToCourier[]>('http://localhost:3000/api/orders/assigned-to-courier')
      .subscribe(response => {
        this.ordersToCourier = response;
      }, error => {
        console.error(error);
      });
  }

  reassignOrder(orderId: string, newCourier: string) {
    this.http.patch(`http://localhost:3000/api/orders/reassign/${orderId}`, { courierAssigned: newCourier })
      .subscribe(response => {
        console.log('Order reassigned:', response);
        this.getAssignedOrdersToCourier(); // Refresh the list
      }, error => {
        console.error(error);
      });
  }
}
