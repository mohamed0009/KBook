import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarAdminComponent } from '../sidebar-admin/sidebar-admin.component';


@Component({
  selector: 'app-stats-offre',
  standalone: true,
  imports: [CommonModule,RouterModule,SidebarAdminComponent],
  templateUrl: './stats-offre.component.html',
  styleUrl: './stats-offre.component.css'
})
export class StatsOffreComponent {
     // Exemple de données statiques pour les offres
     offres = [
      { id: 1, nom: 'Offre Premium',kineNom: 'Dr. Dupont', nbClients: 25 },
      { id: 2, nom: 'Offre Standard',kineNom: 'Dr. Durand', nbClients: 40 },
      { id: 3, nom: 'Offre Basique',kineNom: 'Dr. Martin' ,nbClients: 15 },
    ];
}
