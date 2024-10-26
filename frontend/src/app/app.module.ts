import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import your routing module
import { AppComponent } from './app.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { LoginComponent } from './features/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    // Other components...
  ],
  imports: [
    BrowserModule,
    AppRoutingModule // Include the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
