import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dons-materiel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dons-materiel.component.html',
  styleUrl: './dons-materiel.component.css',
})
export class DonsMaterielComponent {
  materiels = [
    {
      id: 1,
      titre: 'Table de massage',
      description: 'Table de massage professionnelle en excellent état',
      image: 'assets/table-massage.jpg',
      prix: 250,
      ancien_prix: 300,
      localisation: 'Casablanca',
      date: '2024-03-20',
    },
    {
      id: 2,
      titre: 'Électrothérapie',
      description: "Appareil d'électrothérapie peu utilisé",
      image: 'assets/electrotherapie.jpg',
      prix: 180,
      ancien_prix: 220,
      localisation: 'Rabat',
      date: '2024-03-19',
    },
    // Ajoutez d'autres matériels ici
  ];
}
