import { Injectable,Inject,PLATFORM_ID} from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
      
  constructor(private authService: AuthService, private router: Router,  @Inject(PLATFORM_ID) private platformId: Object) {}

  canActivate(): boolean {
    if (isPlatformBrowser(this.platformId)) {
      const user = this.authService.getCurrentUser();
      if (user && user.isAdmin) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false;
      }
    }else{
      return false;
    }
  }
}
