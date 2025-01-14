import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.css',
})
export class FAQPageComponent {
  faqs = [
    {
      question: 'Comment faire un don de matériel ?',
      answer:
        "Pour faire un don de matériel, connectez-vous à votre compte et cliquez sur 'Dons de matériel'. Remplissez ensuite le formulaire avec les détails de votre matériel.",
    },
    {
      question: 'Comment réserver une séance ?',
      answer:
        "Parcourez les offres disponibles, sélectionnez celle qui vous convient et cliquez sur 'Réserver'. Vous recevrez une confirmation par email.",
    },
    {
      question: 'Comment devenir kinésithérapeute partenaire ?',
      answer:
        'Inscrivez-vous en tant que kinésithérapeute et soumettez vos diplômes et certifications. Notre équipe validera votre profil sous 48h.',
    },
    // Ajoutez d'autres FAQs ici
  ];
}
