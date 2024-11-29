import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Import all necessary components
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

// AuthService for guarding routes
import { AuthService } from './AuthService';

const routes: Routes = [
  // Auth Routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: UserRegistrationComponent },

  // User Routes (protected with AuthService)
  { path: 'add-order', component: AddOrderComponent, canActivate: [AuthService] },
  { path: 'user-orders', component: UserOrdersComponent, canActivate: [AuthService] },

  // Order Details and Update Routes (protected with AuthService)
  { path: 'order-details/:orderId', component: OrderDetailsComponent, canActivate: [AuthService] },
  { path: 'update-order/:orderId', component: UpdateOrderComponent, canActivate: [AuthService] },

  // Courier Routes (protected with AuthService)
  { path: 'update-courier/:orderId', component: UpdateCourierComponent, canActivate: [AuthService] },

  // Package Routes (protected with AuthService)
  { path: 'add-package', component: AddPackageComponent, canActivate: [AuthService] },
  { path: 'order-packages/:orderId', component: OrderPackagesComponent, canActivate: [AuthService] },
  { path: 'update-package/:packageId', component: UpdatePackageComponent, canActivate: [AuthService] },
  { path: 'delete-package', component: DeletePackageComponent, canActivate: [AuthService] },
  { path: 'package-details/:id', component: PackageDetailsComponent, canActivate: [AuthService] },
  { path: 'add-to-order', component: AddToOrderComponent, canActivate: [AuthService] },

  // Default and Catch-all Route
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },  // Catch-all route for invalid paths
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
