import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../sidebar-admin/sidebar-admin.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-wallet-page',
  standalone: true,
  imports: [CommonModule,SidebarAdminComponent],
  templateUrl: './wallet-page.component.html',
  styleUrl: './wallet-page.component.css'
})
export class WalletPageComponent {
  commissions = [
    { date: new Date(2024, 11, 5), montant: 150 }, // Décembre 2024
    { date: new Date(2024, 11, 10), montant: 200 },
    { date: new Date(2024, 11, 15), montant: 250 },
    { date: new Date(2024, 10, 25), montant: 300 }, // Novembre 2024 (ne sera pas inclus dans le total du mois courant)
  ];

  totalMoisEnCours: number = 0;

  ngOnInit(): void {
    const moisCourant = new Date().getMonth();
    const anneeCourante = new Date().getFullYear();

    this.totalMoisEnCours = this.commissions
      .filter(commission => 
        commission.date.getMonth() === moisCourant && 
        commission.date.getFullYear() === anneeCourante
      )
      .reduce((total, commission) => total + commission.montant, 0);
  }
}
