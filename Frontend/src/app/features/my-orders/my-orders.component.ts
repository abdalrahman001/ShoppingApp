// my-orders.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Order {
  id: string;
  pickupLocation: string;
  dropoffLocation: string;
  packageDetails: string;
  deliveryTime: string;
  status: string;
}

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.component.html',
  styleUrls: ['./my-orders.component.css']
})
export class MyOrdersComponent implements OnInit {
  orders: Order[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchOrders();
  }

  fetchOrders() {
    this.http.get<Order[]>('http://localhost:3000/api/orders')
      .subscribe(response => {
        this.orders = response;
      }, error => {
        console.error(error);
        // Handle error
      });
  }
}
