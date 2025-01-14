import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-admin',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './sidebar-admin.component.html',
  styleUrl: './sidebar-admin.component.css'
})
export class SidebarAdminComponent {
  admin = {
    username: 'AdminName', // Nom d'utilisateur dynamique
    profilePic: 'https://via.placeholder.com/80', // URL de la photo de profil
  };
}
