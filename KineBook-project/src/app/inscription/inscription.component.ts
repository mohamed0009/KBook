import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from '../navbar/navbar.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-inscription',
  standalone: true,
  imports: [NavbarComponent, FormsModule],
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent {
  onSubmit(){}
  userType: string = ''; // Property to store the selected status

  constructor(private router: Router) {}

  // Method to handle navigation
  navigateToNext() {
    if (!this.userType) {
      alert('Veuillez sélectionner un statut avant de continuer.');
      return;
    }

    switch (this.userType) {
      case 'patient':
        this.router.navigate(['/user-sign-up']);
        break;
      case 'donneur':
        this.router.navigate(['/inscription-donneur']);
        break;
      case 'kine':
        this.router.navigate(['/kine-sign-up']);
        break;
      default:
        alert('Statut non valide.');
    }
  }
}
