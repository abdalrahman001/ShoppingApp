import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-orders',
  templateUrl: './manage-orders.component.html',
  standalone: true,
  styleUrls: ['./manage-orders.component.css']
})
export class ManageOrdersComponent {
  // Mock data for orders (in a real app, you would fetch this from an API)
  orders = [
    { id: 1, user: 'John Doe', status: 'Pending', deliveryDate: '2024-11-15' },
    { id: 2, user: 'Jane Smith', status: 'Shipped', deliveryDate: '2024-11-20' },
    { id: 3, user: 'Bob Johnson', status: 'Delivered', deliveryDate: '2024-11-10' },
  ];

  // Method to update the status of an order
  updateOrderStatus(id: number, status: string): void {
    const order = this.orders.find(order => order.id === id);
    if (order) {
      order.status = status;
    }
  }

  // You can add more logic here for deleting or adding orders, etc.
}
