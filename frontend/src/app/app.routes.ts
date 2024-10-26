import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './features/registration/registration.component';
import { LoginComponent } from './features/login/login.component';

export const routes: Routes = [
  // Redirect empty path to the registration page
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  // Route for the registration page
  { path: 'register', component: RegistrationComponent },
  // Route for the login page
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importing the routes
  exports: [RouterModule] // Exporting the RouterModule so it can be used in the app
})
export class AppRoutingModule { }
