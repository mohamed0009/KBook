import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-offre-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="container mt-4">
      <div class="card">
        <div class="card-body">
          <h2 class="card-title">Détails de l'offre {{ offreId }}</h2>
          <!-- Ajoutez ici les détails de l'offre -->
        </div>
      </div>
    </div>
  `,
})
export class OffreDetailsComponent implements OnInit {
  offreId: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.offreId = this.route.snapshot.paramMap.get('id');
  }
}
