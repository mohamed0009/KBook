import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mes-reservation-page',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './mes-reservation-page.component.html',
  styleUrl: './mes-reservation-page.component.css'
})
export class MesReservationPageComponent implements OnInit{

      // Informations utilisateur
      user = {
        username: 'Jean Dupont',
        photoUrl: 'images/istockphoto-1300845620-612x612.jpg' // Remplacez par un chemin valide
      };
    
      // Données des réservations
      reservations = [
        { kineName: 'Dr. Bernard', kineContact: 'bernard@mail.com', status: 'Confirmé' },
        { kineName: 'Dr. Pierre', kineContact: 'pierre@mail.com', status: 'En attente' },
        { kineName: 'Dr. Marie', kineContact: 'marie@mail.com', status: 'Annulé' },
      ];
    
      constructor() {}
    
      ngOnInit(): void {}

    }
