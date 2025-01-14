import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <h2>Inscription</h2>
      <form (ngSubmit)="onSubmit()" #registerForm="ngForm">
        <div class="mb-3">
          <label for="username" class="form-label">Nom d'utilisateur</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            [(ngModel)]="userData.username"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Mot de passe</label>
          <input
            type="password"
            class="form-control"
            id="password"
            name="password"
            [(ngModel)]="userData.password"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary">S'inscrire</button>
      </form>
    </div>
  `,
})
export class RegisterComponent {
  userData = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register(this.userData).subscribe({
      next: (response) => {
        console.log('Inscription réussie', response);
        this.router.navigate(['/sign-in']);
      },
      error: (error) => {
        console.error("Erreur d'inscription", error);
      },
    });
  }
}
