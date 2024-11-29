import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../package.service';
import { ActivatedRoute, Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-update-package',
  templateUrl: './update-package.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./update-package.component.css']
})
export class UpdatePackageComponent implements OnInit {
  packageId: number = 0;
  packageData = {
    name: '',
    weight: 0,
    dimensions: '',
    description: ''
  };

  constructor(
    private packageService: PackageService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.packageId = +this.route.snapshot.paramMap.get('packageId')!;
    this.loadPackageDetails();
  }

  // Fetch package details for the given package ID
  loadPackageDetails(): void {
    // Ideally, you would get the current details from an API or service.
    // Here, we just use dummy data for simplicity.
    this.packageService.getPackagesByOrder(this.packageId).subscribe({
      next: (response) => {
        // Assuming response contains the package details.
        this.packageData = response[0];  // Adjust based on actual response
      },
      error: (err) => {
        console.error('Error fetching package details', err);
      }
    });
  }

  // Method to update the package
  updatePackage(): void {
    this.packageService.updatePackage(this.packageId, this.packageData).subscribe({
      next: (response) => {
        console.log('Package updated successfully', response);
        this.router.navigate(['/order-packages', this.packageId]); // Navigate back to the packages list
      },
      error: (err) => {
        console.error('Error updating package', err);
      }

    });
  }
}
