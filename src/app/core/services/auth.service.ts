import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
   // Initialize signal from LocalStorage
  private isLoggedInSignal = signal<boolean>(localStorage.getItem('isLoggedIn') === 'true');

  // Read-only version of the signal for components
  isLoggedIn = this.isLoggedInSignal.asReadonly();

  login(username: string, password: string): boolean {
    // Practice logic: check for "admin" / "password"
    if (username === 'dash' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedInSignal.set(true);
      return true;
    }

     if (username === 'shop' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedInSignal.set(true);
      return true;
    }

    if (username === 'form' && password === '123') {
      localStorage.setItem('isLoggedIn', 'true');
      this.isLoggedInSignal.set(true);
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
    this.isLoggedInSignal.set(false);
  }
}
