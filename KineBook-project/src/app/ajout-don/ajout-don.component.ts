
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import FormsModule

@Component({
  selector: 'app-add-donation',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ajout-don.component.html',
  styleUrls: ['./ajout-don.component.css'],
})
export class AddDonationComponent {
  don = {
    materialName: '',
    category: '',
    description: '',
    quantity: 1,
    condition: '',
    availabilityDate: '',
    location: '',
    photo: null,
  };

  onSubmit() {
    console.log('Détails du don :', this.don);
    // Ajouter la logique pour envoyer les données au backend ici.
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.don.photo = file;
      console.log('Photo sélectionnée :', file.name);
    }
  }
}

