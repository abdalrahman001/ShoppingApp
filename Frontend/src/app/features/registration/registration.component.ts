import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  name!: string;
  email!: string;
  password!: string;

  constructor(private http: HttpClient) {}

  onSubmit() {
    const user = { name: this.name, email: this.email, password: this.password };
    this.http.post('http://localhost:3000/api/auth/signup', user)
      .subscribe(response => {
        console.log(response);
        // Handle successful registration
      }, error => {
        console.error(error);
        // Handle error
      });
  }
}
