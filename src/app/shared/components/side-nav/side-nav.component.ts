import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../core/services/auth.service';

@Component({
    selector: 'app-side-nav',
    standalone: true,
    imports: [CommonModule, RouterModule],
    templateUrl: './side-nav.component.html',
    styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
    authService = inject(AuthService);
    router = inject(Router);

    isCollapsed = false;

    toggleSidebar() {
        this.isCollapsed = !this.isCollapsed;
    }

    logout() {
        this.authService.logout();
        this.router.navigate(['/login']);
    }
}
