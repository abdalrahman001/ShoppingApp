import { Component, OnInit } from '@angular/core';
import { PackageService } from '../../package.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-packages',
  templateUrl: './order-packages.component.html',
  standalone: true,
  styleUrls: ['./order-packages.component.css']
})
export class OrderPackagesComponent implements OnInit {
  orderId: number = 0;
  packages: any[] = [];

  constructor(
    private packageService: PackageService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.orderId = +this.route.snapshot.paramMap.get('orderId')!;
    this.loadPackages();
  }

  // Method to load packages for a specific order
  loadPackages(): void {
    this.packageService.getPackagesByOrder(this.orderId).subscribe({
      next: (response) => {
        this.packages = response;
        console.log('Packages fetched successfully', this.packages);
      },
      error: (err) => {
        console.error('Error fetching packages', err);
      }
    });
  }
}
