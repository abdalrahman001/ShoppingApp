import { Component } from '@angular/core';
import { OrderService } from '../../order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete-order',
  templateUrl: './delete-order.component.html',
  standalone: true,
  styleUrls: ['./delete-order.component.css']
})
export class DeleteOrderComponent {
  constructor(
    private orderService: OrderService,
    private router: Router
  ) {}

  // Method to delete an order
  orderId: number | undefined;
  deleteOrder(orderId: number): void {
    this.orderService.deleteOrder(orderId).subscribe({
      next: (response) => {
        console.log('Order deleted successfully', response);
        // Navigate back to the user's orders page or show a success message
        this.router.navigate(['/user-orders']);
      },
      error: (err) => {
        console.error('Error deleting order', err);
      }
    });
  }
}
