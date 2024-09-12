import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

    username = '';
    password = '';
    errorMessage = '';
  
    constructor(private authService: AuthService, private router: Router) {}
  
    login(): void {
      this.authService.login(this.username, this.password).subscribe(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
          this.router.navigate([user.role === 'admin' ? '/admin' : '/products']);
        // this.router.navigateByUrl('/products')
        } else {
          this.errorMessage = 'Invalid username or password';
        }
      });
    }

}
