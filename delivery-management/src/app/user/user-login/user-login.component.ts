import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { CommonModule } from '@angular/common'; // For common directives like ngIf, ngFor
import { HttpClientModule } from '@angular/common/http';
import { AuthService } from '../../AuthService';
import { Router } from '@angular/router'; // To navigate after login

@Component({
  selector: 'app-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss'],
  standalone: true, // Marking this component as standalone
  imports: [
    CommonModule, // Importing CommonModule for directives
    ReactiveFormsModule, // For Reactive Forms
    HttpClientModule, // For HTTP requests
  ],
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initialize the form with email and password fields
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  onSubmit() {
    if (this.loginForm.valid) {
      // Call the login method from the AuthService
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log('Login successful:', response);
          alert('Login successful!');
          this.router.navigate(['/dashboard']); // Redirect to dashboard or home after login
        },
        (error) => {
          console.error('Login failed:', error);
          alert('Login failed. Please check your credentials.');
        }
      );
    }
  }
}
