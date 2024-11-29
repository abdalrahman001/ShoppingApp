import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import all components
import { LoginComponent } from './user/user-login/user-login.component';
import { UserRegistrationComponent } from './user/user-registration/user-registration.component';
import { AddOrderComponent } from './orders/add-order/add-order.component';
import { UserOrdersComponent } from './orders/user-orders/user-orders.component';
import { OrderDetailsComponent } from './orders/order-details/order-details.component';
import { UpdateOrderComponent } from './orders/update-order/update-order.component';
import { UpdateCourierComponent } from './orders/update-courier/update-courier.component';
import { AddPackageComponent } from './packages/add-package/add-package.component';
import { OrderPackagesComponent } from './packages/order-packages/order-packages.component';
import { UpdatePackageComponent } from './packages/update-package/update-package.component';
import { DeletePackageComponent } from './packages/delete-package/delete-package.component';
import { PackageDetailsComponent } from './packages/package-details/package-details.component';
import { AddToOrderComponent } from './packages/add-to-order/add-to-order.component';

// Services
import { AuthService } from './AuthService';
import { OrderService } from './order.service';
import { PackageService } from './package.service';

@NgModule({
  declarations: [
    // Declare all components
    UserRegistrationComponent
  ],
  imports: [
    // Import necessary Angular modules
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    AppComponent,
    LoginComponent,
    AddOrderComponent,
    UserOrdersComponent,
    OrderDetailsComponent,
    UpdateOrderComponent,
    UpdateCourierComponent,
    AddPackageComponent,
    OrderPackagesComponent,
    UpdatePackageComponent,
    DeletePackageComponent,
    PackageDetailsComponent,
    AddToOrderComponent
  ],
  providers: [
    // Register services here
    AuthService,
    OrderService,
    PackageService
  ],
  bootstrap: []



  // Bootstrap the root component
})
export class AppModule { }
