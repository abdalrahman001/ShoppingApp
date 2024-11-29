import { Component } from '@angular/core';
import { PackageService } from '../../package.service';
import { Router } from '@angular/router';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-add-package',
  templateUrl: './add-package.component.html',
  standalone: true,
  imports: [
    FormsModule
  ],
  styleUrls: ['./add-package.component.css']
})
export class AddPackageComponent {
  package = {
    name: '',
    weight: '',
    dimensions: '',
    description: ''
  };

  constructor(
    private packageService: PackageService,
    private router: Router
  ) {}

  // Method to handle the form submission
  onSubmit(): void {
    this.packageService.addPackage(this.package).subscribe({
      next: (response) => {
        console.log('Package added successfully', response);
        this.router.navigate(['/user-orders']);  // Redirect to another page after successful submission
      },
      error: (err) => {
        console.error('Error adding package', err);
      }
    });
  }
}
