import { Component } from '@angular/core';
import { UserSignUpComponent } from '../user-sign-up/user-sign-up.component';


@Component({
  selector: 'app-inscription-donneur',
  standalone: true,
  imports: [UserSignUpComponent],
  templateUrl: './inscription-donneur.component.html',
  styleUrl: './inscription-donneur.component.css'
})
export class InscriptionDonneurComponent {

}
