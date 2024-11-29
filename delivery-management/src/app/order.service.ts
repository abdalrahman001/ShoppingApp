import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OrderService {
  private baseUrl = 'http://localhost:3000/orders';  // Backend API URL for orders

  constructor(private http: HttpClient) {}

  // Method for adding a new order
  addNewOrder(orderData: any): Observable<any> {
    return this.http.post(`http://localhost:3000/orders/addorder`, orderData);


  }
  getOrderById(orderId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/orders/getOrder/1`);
  }
  getOrdersByUserId(userId: string): Observable<any> {
    return this.http.get(`http://localhost:3000/orders/getorderbyuser/1`);
  }
  updateOrder(orderId: string, updatedOrderData: any): Observable<any> {
    return this.http.put(`http://localhost:3000/orders/updateOrder/1`, updatedOrderData);
  }

  updateCourier(orderId: number | undefined, courierData: any): Observable<any> {
    return this.http.post(`http://localhost:3000/orders/updatecourier/1`, courierData);
  }
  deleteOrder(orderId: number): Observable<any> {
    return this.http.delete(`http://localhost:3000/orders/deleteOrder/12`);
  }
  getUserOrders(): Observable<any[]> {
    return this.http.get<any[]>(``);  // Adjust the API as needed

  }
}
