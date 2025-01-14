import { Component } from '@angular/core';

@Component({
  selector: 'app-donneur-form',
  standalone: true,
  imports: [],
  templateUrl: './donneur-form.component.html',
  styleUrl: './donneur-form.component.css'
})
export class DonneurFormComponent {
  onSubmit(form: any): void {
    console.log('Form data:', form.value);
    alert('Formulaire soumis avec succès!');
  }
}

