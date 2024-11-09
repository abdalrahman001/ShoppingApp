import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;

  constructor(private http: HttpClient) {}

  onLogin() {
    const user = { email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/auth/login', user)
      .subscribe(response => {
        console.log(response);
        // Handle successful login
      }, error => {
        console.error(error);
        // Handle error
      });
  }
}
