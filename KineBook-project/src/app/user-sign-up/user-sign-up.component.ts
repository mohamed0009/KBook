import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, NavbarComponent],
  templateUrl: './user-sign-up.component.html',
  styleUrl: './user-sign-up.component.css',
})
export class UserSignUpComponent {
  formStep1: FormGroup;
  formStep2: FormGroup;
  formStep3: FormGroup;
  step: number = 1; // Gérer les étapes du formulaire
  passwordVisible: boolean = false; // Contrôle de la visibilité du mot de passe
  errorMessage: string = '';

  // Validation des critères du mot de passe
  isUppercase: boolean = false;
  isNumber: boolean = false;
  isSpecialChar: boolean = false;
  isLengthValid: boolean = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    // Initialisation de formStep1
    this.formStep1 = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      dateNaissance: ['', Validators.required],
      sexe: ['', Validators.required],
      adresse: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });

    // Initialisation de formStep2
    this.formStep2 = this.fb.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.pattern(
              /^(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
            ),
          ],
        ], // Mot de passe avec majuscule, chiffres, symboles
        confirmPassword: ['', Validators.required],
      },
      {
        validators: this.passwordsMatchValidator,
      }
    );

    this.formStep3 = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
        ],
      ],
    });
  }

  // Revenir à l'étape précédente
  goToStep1(): void {
    this.step = 1;
  }
  // Méthode pour passer à l'étape 2
  goToStep2() {
    if (this.formStep1.valid) {
      this.step = 2;
    }
  }

  // Passer à l'étape suivante
  goToStep3(): void {
    if (this.formStep2.valid) {
      this.step = 3;
    } else {
      this.formStep2.markAllAsTouched();
    }
  }

  // Valider que les mots de passe correspondent
  passwordsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  onPasswordInput() {
    const password = this.formStep2.get('password')?.value;

    // Vérification de la majuscule
    this.isUppercase = /[A-Z]/.test(password);

    // Vérification du nombre de chiffres (minimum 4)
    this.isNumber = (password.match(/\d/g) || []).length >= 4;

    // Vérification des symboles spéciaux
    this.isSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Vérification de la longueur
    this.isLengthValid = password?.length >= 8;
  }

  // Vérifie si le mot de passe est valide (tous les critères)
  isPasswordValid(): boolean {
    return (
      this.isUppercase &&
      this.isNumber &&
      this.isSpecialChar &&
      this.isLengthValid
    );
  }

  // Méthode pour soumettre le formulaire
  onSubmit() {
    if (this.formStep1.valid && this.formStep2.valid && this.formStep3.valid) {
      const userData = {
        ...this.formStep1.value,
        ...this.formStep2.value,
        ...this.formStep3.value,
      };

      console.log('Données envoyées:', userData); // Pour déboguer

      this.authService.register(userData).subscribe({
        next: (response) => {
          console.log('Réponse du serveur:', response);
          this.router.navigate(['/sign-in']);
        },
        error: (error) => {
          console.error('Erreur détaillée:', error);
          this.errorMessage =
            error.error?.message ||
            "Une erreur est survenue lors de l'inscription. Veuillez réessayer.";
        },
      });
    } else {
      this.errorMessage =
        'Veuillez remplir correctement tous les champs du formulaire';
      // Marquer tous les champs comme touchés pour afficher les erreurs
      Object.keys(this.formStep1.controls).forEach((key) => {
        const control = this.formStep1.get(key);
        control?.markAsTouched();
      });
      Object.keys(this.formStep2.controls).forEach((key) => {
        const control = this.formStep2.get(key);
        control?.markAsTouched();
      });
      Object.keys(this.formStep3.controls).forEach((key) => {
        const control = this.formStep3.get(key);
        control?.markAsTouched();
      });
    }
  }

  // Méthode pour basculer la visibilité du mot de passe
  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  // Méthode pour réinitialiser l'étape 1
  resetStep1() {
    this.formStep1.reset();
    this.step = 1; // Revenir à l'étape 1
  }

  // Méthode pour réinitialiser l'étape 2
  resetStep2() {
    this.formStep2.reset();
    this.step = 1; // Revenir à l'étape 1
  }
}
