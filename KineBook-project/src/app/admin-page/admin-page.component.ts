import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarAdminComponent } from '../sidebar-admin/sidebar-admin.component';
import { StatsOffreComponent } from '../stats-offre/stats-offre.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterModule,SidebarAdminComponent,StatsOffreComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}
