import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule and ReactiveFormsModule
import { RouterModule, Routes } from '@angular/router'; // Import RouterModule

import { AppComponent } from './app.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { CreateOrderComponent } from './features/create-order/create-order.component';
import { LoginComponent } from './features/login/login.component';
import { UpdateOrderStatusComponent } from './features/update-order-status/update-order-status.component';
import { MyOrdersComponent } from './features/my-orders/my-orders.component';
import { CommonModule } from '@angular/common';

// Define routes (example)
const appRoutes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'login', component: LoginComponent },
  { path: 'update-status', component: UpdateOrderStatusComponent },
  { path: 'my-orders', component: MyOrdersComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CreateOrderComponent,
    LoginComponent,
    UpdateOrderStatusComponent,
    MyOrdersComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule, // Add FormsModule here
    ReactiveFormsModule, // Add ReactiveFormsModule here if needed
    RouterModule.forRoot(appRoutes) // Add RouterModule with routes here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
