import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000/auth';

  constructor(private http: HttpClient) {}

  signup(userData: any): Observable<any> {
    return this.http.post('http://localhost:3000/auth/signup', userData);


  }
  login(credentials: { email: string; password: string }): Observable<any> {
    // Making the GET request with query params (email and password)
    const params = new HttpParams()
      .set('email', credentials.email)
      .set('password', credentials.password);

    return this.http.get(`http://localhost:3000/auth/login`, { params });
  }
}
