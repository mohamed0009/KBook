import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Component({
  selector: 'app-inscription-kine',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './inscription-kine.component.html',
  styleUrl: './inscription-kine.component.css'
})
export class InscriptionKineComponent {
  therapistForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.therapistForm = this.fb.group({
      // Personal Information
      name: ['', Validators.required],
      gender: ['',Validators.required],
      birthDate: ['',Validators.required],

      // Contact Information
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      address: ['', Validators.required],

      // Professional Information
      specialty: ['', Validators.required],
      experience: ['', [Validators.min(0)]],
      languages: ['',Validators.required],

      // Account Information
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.therapistForm.valid) {
      console.log('Formulaire soumis avec succès :', this.therapistForm.value);
      alert('Inscription réussie !');
      this.therapistForm.reset();
    } else {
      alert('Veuillez remplir tous les champs obligatoires.');
    }
  }

}
