import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-kine-demandes',
  standalone: true,
  imports: [CommonModule,SidebarAdminComponent],
  templateUrl: './kine-demandes.component.html',
  styleUrl: './kine-demandes.component.css'
})
export class KineDemandesComponent {
  demandes = [
    { id: 1, nom: 'Dr. Jean Dupont', specialite: 'Physiothérapie', statut: 'En attente' },
    { id: 2, nom: 'Dr. Marie Curie', specialite: 'Kinésithérapie sportive', statut: 'En attente' },
    { id: 3, nom: 'Dr. Pierre Martin', specialite: 'Rééducation', statut: 'En attente' },
  ];

  accepterDemande(id: number) {
    const demande = this.demandes.find(d => d.id === id);
    if (demande) {
      demande.statut = 'Acceptée';
    }
  }

  refuserDemande(id: number) {
    const demande = this.demandes.find(d => d.id === id);
    if (demande) {
      demande.statut = 'Refusée';
    }
  }
}
