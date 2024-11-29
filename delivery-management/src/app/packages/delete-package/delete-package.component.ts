import { Component } from '@angular/core';
import { PackageService } from '../../package.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-delete-package',
  templateUrl: './delete-package.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./delete-package.component.css']
})
export class DeletePackageComponent {
  packageId: number = 0; // This will be provided by user input or URL parameter

  constructor(
    private packageService: PackageService,
    private router: Router
  ) {}

  // Method to delete the package
  deletePackage(): void {
    this.packageService.deletePackage(this.packageId).subscribe({
      next: (response) => {
        console.log('Package deleted successfully', response);
        this.router.navigate(['/user-packages']); // Redirect to a list of packages or another relevant page
      },
      error: (err) => {
        console.error('Error deleting package', err);
      }
    });
  }
}
