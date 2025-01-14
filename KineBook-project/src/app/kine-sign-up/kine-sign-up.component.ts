import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-kine-sign-up',
  imports: [ReactiveFormsModule, CommonModule,NavbarComponent],
  standalone: true,
  templateUrl: './kine-sign-up.component.html',
  styleUrls: ['./kine-sign-up.component.css'],
})
export class KineSignUpComponent {
  formStep1: FormGroup;
  formStep2: FormGroup;
  formStep3: FormGroup;
  step: number = 1; // Gérer les étapes du formulaire
  diplomes: File[] = [];
  certificats: File[] = [];
  passwordVisible: boolean = false; // Contrôle de la visibilité du mot de passe

   // Validation des critères du mot de passe
 isUppercase: boolean = false;
 isNumber: boolean = false;
 isSpecialChar: boolean = false;
 isLengthValid: boolean = false;

  constructor(private fb: FormBuilder) {
    // Étape 1 : Informations personnelles
    this.formStep1 = this.fb.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      adresse: ['', Validators.required],
      cin: ['', Validators.required],
      ville: ['', Validators.required],
      telephone: ['', [Validators.required, Validators.minLength(10), Validators.pattern(/^\d+$/)]],
    });

    // Étape 2 : Identification
    this.formStep2 = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d{4,})(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/)
      ]], // Mot de passe avec majuscule, chiffres, symboles
      confirmPassword: ['', Validators.required]
    }, {
      validators: this.passwordsMatchValidator
    });

    this.formStep3 = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]],
    });
  }


  // Valider que les mots de passe correspondent
  passwordsMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { 'mismatch': true };
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
    return this.isUppercase && this.isNumber && this.isSpecialChar && this.isLengthValid;
  }

    // Méthode pour basculer la visibilité du mot de passe
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible;
    }

    // Revenir à l'étape précédente
    goToStep1(): void {
      this.step = 1;
    }

  // Passer à l'étape suivante
  goToStep2(): void {
    if (this.formStep1.valid) {
      this.step = 2;
    } else {
      this.formStep1.markAllAsTouched();
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

  // Gestion des fichiers téléchargés
  onFileSelected(event: any, type: string): void {
    const files = event.target.files;
    if (type === 'diplomes') {
      this.diplomes.push(...files);
    } else if (type === 'certificats') {
      this.certificats.push(...files);
    }
  }

  // Supprimer un fichier
  removeFile(type: string, index: number): void {
    if (type === 'diplomes') {
      this.diplomes.splice(index, 1);
    } else if (type === 'certificats') {
      this.certificats.splice(index, 1);
    }
  }

  // Soumettre le formulaire
  onSubmit(): void {
    if (this.formStep2.valid) {
      console.log('Formulaire soumis avec succès', {
        ...this.formStep1.value,
        ...this.formStep2.value,
        diplomes: this.diplomes,
        certificats: this.certificats,
      });
    } else {
      this.formStep2.markAllAsTouched();
    }
  }
    // Méthode pour réinitialiser l'étape 1
    resetStep1() {
      this.formStep1.reset();
      this.step = 1;  // Revenir à l'étape 1
    }
}
