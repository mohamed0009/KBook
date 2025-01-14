import { Component} from '@angular/core';
import { SidebarKineComponent } from "../sidebar-kine/sidebar-kine.component";


@Component({
  selector: 'app-session-kine',
  standalone: true,
  imports: [SidebarKineComponent],  // Ajouter CommonModule ici
  templateUrl: './session-kine.component.html',
  styleUrls: ['./session-kine.component.css']
})
export class SessionKineComponent{

}
