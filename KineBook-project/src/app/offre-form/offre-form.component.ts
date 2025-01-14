import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
// import { MatDialogRef } from '@angular/material/dialog';
// import { MatFormFieldModule } from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input';
// import { MatDatepickerModule } from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatNativeDateModule } from '@angular/material/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-offre-form',
  standalone: true,
  templateUrl: './offre-form.component.html',
  styleUrls: ['./offre-form.component.css'],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ReactiveFormsModule, // Module pour les formulaires réactifs
    CommonModule,
  ]
})
export class OffreFormComponent {
  reservationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    // private dialogRef: MatDialogRef<OffreFormComponent> // Pour gérer la fermeture du dialogue
  ) {
    this.reservationForm = this.fb.group({
      firstName: ['', Validators.required], // Champ Prénom
      lastName: ['', Validators.required],  // Champ Nom
      phone: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]], // Champ Téléphone
      email: ['', [Validators.required, Validators.email]], // Champ Email
      reservationDate: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.reservationForm.valid) {
      console.log(this.reservationForm.value);
      // this.dialogRef.close(this.reservationForm.value); // Ferme la modale et renvoie les données
    }
  }
}
