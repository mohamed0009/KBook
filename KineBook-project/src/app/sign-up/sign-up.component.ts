import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="container mt-5">
      <div *ngIf="errorMessage" class="alert alert-danger">
        {{ errorMessage }}
      </div>
      <form (ngSubmit)="onSubmit()" #signUpForm="ngForm">
        <div class="mb-3">
          <label for="username" class="form-label">Nom d'utilisateur</label>
          <input
            type="text"
            class="form-control"
            id="username"
            name="username"
            [(ngModel)]="userData.username"
            required
            minlength="4"
            maxlength="20"
            [class.is-invalid]="
              signUpForm.submitted && signUpForm.form.get('username')?.invalid
            "
          />
          <div class="form-text">
            Maximum 20 caractères Minimum 4 caractères.
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-primary"
          [disabled]="signUpForm.invalid"
        >
          Soumettre
        </button>
        <button
          type="button"
          class="btn btn-secondary ms-2"
          (click)="onPrevious()"
        >
          Précédent
        </button>
      </form>
    </div>
  `,
})
export class SignUpComponent {
  userData = {
    username: '',
  };
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    if (
      this.userData.username.length >= 4 &&
      this.userData.username.length <= 20
    ) {
      this.authService.signUp(this.userData).subscribe({
        next: (response) => {
          console.log('Inscription réussie', response);
          this.router.navigate(['/sign-in']);
        },
        error: (error) => {
          console.error("Erreur d'inscription", error);
          this.errorMessage =
            error.error.message ||
            "Une erreur est survenue lors de l'inscription";
        },
      });
    }
  }

  onPrevious() {
    this.router.navigate(['/dashboard']);
  }
}
