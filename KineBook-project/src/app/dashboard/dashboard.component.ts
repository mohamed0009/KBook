import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartesOffresComponent } from '../cartes-offres/cartes-offres.component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, CartesOffresComponent, NavbarComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  loading = true;
  error: string | null = null;
  showAlert = false;
  alertClass = '';
  alertMessage = '';

  ngOnInit() {
    // Simuler un chargement court
    setTimeout(() => {
      this.loading = false;
    }, 1000);
  }
}
