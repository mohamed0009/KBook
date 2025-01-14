import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  constructor(public authService: AuthService, private router: Router) {}

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/sign-in']);
  }

  getUserInitials(): string {
    const user = this.authService.getUserData();
    console.log('Current user:', user);
    if (user?.nom) {
      return user.nom.charAt(0).toUpperCase();
    }
    return '';
  }

  getFullName(): string {
    const user = this.authService.getUserData();
    console.log('Getting full name for user:', user);
    return user ? `${user.nom} ${user.prenom}` : '';
  }
}
