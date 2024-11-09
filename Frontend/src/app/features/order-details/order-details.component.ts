import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  orderId!: string;
  orderDetails: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit() {
    this.orderId = this.route.snapshot.paramMap.get('id')!;
    this.getOrderDetails();
  }

  getOrderDetails() {
    this.http.get(`http://localhost:3000/api/orders/${this.orderId}`)
      .subscribe(response => {
        this.orderDetails = response;
      }, error => {
        console.error(error);
      });
  }

  cancelOrder() {
    this.http.delete(`http://localhost:3000/api/orders/${this.orderId}`)
      .subscribe(response => {
        console.log('Order cancelled:', response);
      }, error => {
        console.error(error);
      });
  }
}
