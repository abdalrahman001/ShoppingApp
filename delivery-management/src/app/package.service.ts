import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PackageService {
  private baseUrl: string = 'http://localhost:3000/packages';

  constructor(private http: HttpClient) {
  }

  // Method to add a new package
  addPackage(packageData: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/packages/addPackage", packageData);
  }

  getPackagesByOrder(orderId: number): Observable<any[]> {
    return this.http.get<any[]>(`http://localhost:3000/packages/getPackagesByOrder/1`);
  }

  updatePackage(packageId: number, packageData: any): Observable<any> {
    return this.http.put<any>(`http://localhost:3000/packages/updatePackage/1`, packageData);
  }
  deletePackage(packageId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/deletePackage/${packageId}`);
  }
  getPackageById(packageId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/packages/getPackage/4`);
  }
  addToOrder(packageId: number, orderId: number): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/packages/addToOrder/4`, {orderId});
  }
}
