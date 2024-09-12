import { Injectable,Inject,PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   
      
   private apiUrl = 'http://localhost:3000/users';
  

   constructor(@Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient,) { }
         
   

   login(username: string, password: string): Observable<any> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(users => users.find(user => user.username === username && user.password === password)),
      catchError(() => of(null))
    );
   }

   isAuthenticated(): boolean {
    return !!localStorage.getItem('currentUser');
   }

   getCurrentUser(): any {
    if (isPlatformBrowser(this.platformId)) {
      // Access localStorage only in the browser
      const user = localStorage.getItem('currentUser');
      return user ? JSON.parse(user) : null;
    } else {
      // Handle server-side scenario or return default value
      return null;
    }
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }
}


