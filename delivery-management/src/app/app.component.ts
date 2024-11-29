import { Component } from '@angular/core';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component';
import {UserOrdersComponent} from './orders/user-orders/user-orders.component';
import {LoginComponent} from './user/user-login/user-login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
    NavbarComponent,
    UserOrdersComponent,
    LoginComponent

  ],
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router) {}

  logout() {
    // Perform logout actions here, like clearing session or localStorage
    // For example:
    localStorage.removeItem('auth_token');  // If you are using token-based auth

    // Redirect to the login page
    this.router.navigate(['/login']);
  }
}
