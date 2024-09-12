import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    // Additional initialization logic can go here
  }

  // Method to handle redirection to the product list
  redirectToProducts() {
    this.router.navigate(['/products']);
  }

  // Method to handle logout
  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
