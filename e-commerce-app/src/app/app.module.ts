import { NgModule } from '@angular/core';
import { BrowserModule, } from '@angular/platform-browser';
import { FormsModule,NgModel } from '@angular/forms';
import { HttpClientModule,provideHttpClient,withFetch } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { AuthService } from './auth.service';
import { ProductService } from './product.service';
import { CartService } from './cart.service';
import { AuthGuard } from './auth.guard';
import { AdminGuard } from './admin-guard.guard';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductListComponent,
    CartComponent,
    CheckoutComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    CommonModule
    
  ],
  providers: [
    provideHttpClient(withFetch()),
    AuthService, ProductService, CartService, AuthGuard, AdminGuard,
    {provide:'apiUrl',useValue:'http://localhost:3000/products'}
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
