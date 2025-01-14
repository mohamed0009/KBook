import { Component } from '@angular/core';
import { SidebarKineComponent } from "../sidebar-kine/sidebar-kine.component";
import { MesDonsComponent } from "../mes-dons/mes-dons.component";

@Component({
  selector: 'app-dashboard-donneur',
  standalone: true,
  imports: [SidebarKineComponent, MesDonsComponent],
  templateUrl: './dashboard-donneur.component.html',
  styleUrl: './dashboard-donneur.component.css'
})
export class DashboardDonneurComponent {

}
