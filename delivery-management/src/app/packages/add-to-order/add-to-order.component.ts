import { Component } from '@angular/core';
import { PackageService } from '../../package.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-to-order',
  templateUrl: './add-to-order.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./add-to-order.component.css']
})
export class AddToOrderComponent {
  packageId: number = 0; // Package ID to add to order
  orderId: number = 0; // Order ID to which the package will be added

  constructor(
    private packageService: PackageService,
    private router: Router
  ) {}

  // Method to add the package to the order
  addPackageToOrder(): void {
    this.packageService.addToOrder(this.packageId, this.orderId).subscribe({
      next: (response) => {
        console.log('Package added to order successfully', response);
        this.router.navigate(['/user-orders']); // Redirect to the user's orders or another page
      },
      error: (err) => {
        console.error('Error adding package to order', err);
      }
    });
  }
}
