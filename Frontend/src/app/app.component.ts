import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping App';
  isAdmin: boolean = false; // To track admin role
  isLoggedIn: boolean = false; // To track login state
  username: string = ''; // Store username
  password: string = ''; // Store password

  constructor(private router: Router) {}

  // Sample users, replace with real authentication
  users = [
    { username: 'user', password: 'userpass', role: 'user' },
    { username: 'admin', password: 'adminpass', role: 'admin' }
  ];

  // Login method
  login(): void {
    const user = this.users.find(
      (user) => user.username === this.username && user.password === this.password
    );

    if (user) {
      this.isLoggedIn = true;
      this.isAdmin = user.role === 'admin';

      if (this.isAdmin) {
        this.router.navigate(['/admin']);
      } else {
        this.router.navigate(['/my-orders']);
      }
    } else {
      alert('Invalid credentials');
    }
  }

  // Logout method
  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.username = '';
    this.password = '';
    this.router.navigate(['/login']);
  }
}
