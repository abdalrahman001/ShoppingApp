import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../order.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-courier',
  templateUrl: './update-courier.component.html',
  standalone: true,
  styleUrls: ['./update-courier.component.css']
})
export class UpdateCourierComponent implements OnInit {
  orderId: number | undefined;
  courierData = {
    courierId: null,  // Placeholder for courier ID (to be updated)
    // Other fields related to the courier update can be added
  };

  constructor(
    private orderService: OrderService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Get the order ID from the route params
    this.orderId = +this.route.snapshot.paramMap.get('orderId')!;
  }

  // Method to handle the form submission
  updateCourier(): void {
    this.orderService.updateCourier(this.orderId, this.courierData).subscribe({
      next: (response) => {
        console.log('Courier updated successfully', response);
        this.router.navigate(['/user-orders']);  // Navigate to user orders page
      },
      error: (err) => {
        console.error('Error updating courier', err);
      }
    });
  }
}
