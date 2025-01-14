import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cartes-offres',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="offers-container bg-[#edf8f8]">
      <div class="content-wrapper">
        <h1 class="text-4xl font-bold text-center text-[#2bb0b0] mb-12">
          Découvrez Nos Offres Exclusives
        </h1>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Carte 1 -->
          <div
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div class="relative">
              <img
                src="assets/chaise1.jpg"
                alt="Rééducation"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 right-4 bg-[#2bb0b0] text-white px-3 py-1 rounded-full text-sm font-semibold"
              >
                -20%
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Offre de 5 séances de rééducation
              </h3>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-bold text-[#2bb0b0]">1000 dh</span>
                <span class="text-sm text-gray-500 line-through">1250 dh</span>
              </div>
              <button
                routerLink="/details"
                class="w-full bg-[#2bb0b0] text-white py-2 rounded-lg hover:bg-[#239090] transition-colors"
              >
                Voir les détails
              </button>
            </div>
          </div>

          <!-- Carte 2 -->
          <div
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div class="relative">
              <img
                src="assets/OIP.jpg"
                alt="Rééducation"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 right-4 bg-[#2bb0b0] text-white px-3 py-1 rounded-full text-sm font-semibold"
              >
                -25%
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Offre de 10 séances de rééducation
              </h3>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-bold text-[#2bb0b0]">2000 dh</span>
                <span class="text-sm text-gray-500 line-through">2500 dh</span>
              </div>
              <button
                routerLink="/details"
                class="w-full bg-[#2bb0b0] text-white py-2 rounded-lg hover:bg-[#239090] transition-colors"
              >
                Voir les détails
              </button>
            </div>
          </div>

          <!-- Carte 3 -->
          <div
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div class="relative">
              <img
                src="assets/neck.jpg"
                alt="Massage"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 right-4 bg-[#2bb0b0] text-white px-3 py-1 rounded-full text-sm font-semibold"
              >
                -30%
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Offre Massage Thérapeutique du Dos
              </h3>
              <div class="flex items-center gap-2 mb-4">
                <span class="text-2xl font-bold text-[#2bb0b0]">200 dh</span>
                <span class="text-sm text-gray-500 line-through">300 dh</span>
              </div>
              <button
                routerLink="/details"
                class="w-full bg-[#2bb0b0] text-white py-2 rounded-lg hover:bg-[#239090] transition-colors"
              >
                Voir les détails
              </button>
            </div>
          </div>

          <!-- Carte Consultation -->
          <div
            class="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <div class="relative">
              <img
                src="assets/canne.jpg"
                alt="Consultation"
                class="w-full h-48 object-cover"
              />
              <div
                class="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
              >
                Gratuit
              </div>
            </div>
            <div class="p-6">
              <h3 class="text-xl font-bold text-gray-800 mb-2">
                Offre de Consultation Kinésithérapeutique
              </h3>
              <p class="text-gray-600 mb-4">Première consultation offerte</p>
              <button
                routerLink="/details"
                class="w-full bg-[#2bb0b0] text-white py-2 rounded-lg hover:bg-[#239090] transition-colors"
              >
                Voir les détails
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100%;
        min-height: 100%;
        background-color: #edf8f8;
      }

      .offers-container {
        width: 100%;
        min-height: 100%;
        padding: 2rem;
        display: flex;
        flex-direction: column;
      }

      .content-wrapper {
        max-width: 1400px;
        width: 100%;
        margin: 0 auto;
        flex: 1;
      }

      @media (max-width: 768px) {
        .offers-container {
          padding: 1rem;
        }
      }
    `,
  ],
})
export class CartesOffresComponent {}
