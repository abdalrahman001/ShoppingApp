import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../package.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  standalone: true,
  styleUrls: ['./package-details.component.css']
})
export class PackageDetailsComponent implements OnInit {
  packageId: number = 0; // Will be provided from route parameter
  packageDetails: any = {}; // Will hold the package details

  constructor(
    private packageService: PackageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Get the packageId from route parameters
    this.route.params.subscribe(params => {
      this.packageId = +params['id']; // Convert the ID from string to number
      this.getPackageDetails();
    });
  }

  // Method to fetch the package details by ID
  getPackageDetails(): void {
    this.packageService.getPackageById(this.packageId).subscribe({
      next: (data) => {
        this.packageDetails = data; // Store the received data in the component
      },
      error: (err) => {
        console.error('Error fetching package details', err);
      }
    });
  }
}
