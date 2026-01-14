import { Component, inject, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  ngOnInit(): void {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
  }

  auth = inject(AuthService);
  router = inject(Router);

  isDarkMode = true; // Match your dashboard toggle state
  credentials = { username: '', password: '' };
  errorMessage = '';

  onLogin() {
    const success = this.auth.login(this.credentials.username, this.credentials.password);
    if (success) {
      if (this.credentials.username == 'dash') {
        this.router.navigate(['/app/dash']);
      }
      if (this.credentials.username == 'shop') {
        this.router.navigate(['/app/ContentProjectionparentcomponent']);
      }

      if (this.credentials.username == 'form') {
        this.router.navigate(['/app/parentcomponent']);
      }


    } else {
      this.errorMessage = 'Invalid username or password (Try admin/password)';
    }
  }

}
