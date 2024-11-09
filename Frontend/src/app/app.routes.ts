import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { AssignedOrdersComponent } from './features/assigned-orders/assigned-orders.component';
import { UpdateOrderStatusComponent } from './features/update-order-status/update-order-status.component';
import { OrderDetailsComponent } from './features/order-details/order-details.component';
import { CreateOrderComponent } from './features/create-order/create-order.component';
import { MyOrdersComponent } from './features/my-orders/my-orders.component';
import { ManageOrdersComponent } from './features/manage-orders/manage-orders.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'assigned-orders', component: AssignedOrdersComponent },
  { path: 'update-order-status', component: UpdateOrderStatusComponent },
  { path: 'order-details/:id', component: OrderDetailsComponent },
  { path: 'create-order', component: CreateOrderComponent },
  { path: 'my-orders', component: MyOrdersComponent },
  { path: 'manage-orders', component: ManageOrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
