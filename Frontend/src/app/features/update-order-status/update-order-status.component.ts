// src/app/features/update-order-status/update-order-status.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrderStatus } from '../../modules/order-status.model';

@Component({
  selector: 'app-update-order-status',
  templateUrl: './update-order-status.component.html',
  styleUrls: ['./update-order-status.component.css']
})
export class UpdateOrderStatusComponent implements OnInit {
  orderId!: string;
  status!: string;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Initialization logic if needed
  }

  onUpdateStatus() {
    const orderStatus: OrderStatus = {
      orderId: this.orderId,
      status: this.status
    };

    this.http.post('http://localhost:3000/api/orders/update-status', orderStatus)
      .subscribe(response => {
        console.log('Order status updated:', response);
        // Handle successful update (e.g., show a message, refresh order list)
      }, error => {
        console.error(error);
        // Handle error
      });
  }
}
