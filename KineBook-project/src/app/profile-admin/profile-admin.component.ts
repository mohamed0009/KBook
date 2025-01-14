import { Component } from '@angular/core';
import { SidebarAdminComponent } from '../sidebar-admin/sidebar-admin.component';

@Component({
  selector: 'app-profile-admin',
  standalone: true,
  imports: [SidebarAdminComponent],
  templateUrl: './profile-admin.component.html',
  styleUrl: './profile-admin.component.css'
})
export class ProfileAdminComponent {

}
