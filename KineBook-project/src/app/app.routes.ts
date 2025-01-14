import { Routes } from '@angular/router';

import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonneurFormComponent } from './donneur-form/donneur-form.component';
import { SidebarKineComponent } from './sidebar-kine/sidebar-kine.component';
import { SessionKineComponent } from './session-kine/session-kine.component';
import { OffreKineComponent } from './offre-kine/offre-kine.component';
import { CartesOffresComponent } from './cartes-offres/cartes-offres.component';

import { MesReservationPageComponent } from './mes-reservation-page/mes-reservation-page.component';
import { OffreFormComponent } from './offre-form/offre-form.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';
import { KineSignUpComponent } from './kine-sign-up/kine-sign-up.component';

import { AjoutOffreComponent } from './ajout-offre/ajout-offre.component';
import { FAQPageComponent } from './faq-page/faq-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionPatientComponent } from './inscription-patient/inscription-patient.component';
import { InscriptionDonneurComponent } from './inscription-donneur/inscription-donneur.component';
import { InscriptionKineComponent } from './inscription-kine/inscription-kine.component';
import { ShowReservationComponent } from './show-reservation/show-reservation.component';
import { EditProfilKineComponent } from './edit-profil-kine/edit-profil-kine.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { DashboardAdminComponent } from './dashboard-admin/dashboard-admin.component';
import { SidebarAdminComponent } from './sidebar-admin/sidebar-admin.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { StatsOffreComponent } from './stats-offre/stats-offre.component';
import { KineDemandesComponent } from './kine-demandes/kine-demandes.component';
import { WalletPageComponent } from './wallet-page/wallet-page.component';
import { ProfileAdminComponent } from './profile-admin/profile-admin.component';
import { DonsMaterielComponent } from './dons-materiel/dons-materiel.component';
import { DashboardDonneurComponent } from './dashboard-donneur/dashboard-donneur.component';
import { MesDonsComponent } from './mes-dons/mes-dons.component';
import { AddDonationComponent } from './ajout-don/ajout-don.component';
import { TestApiComponent } from './test-api/test-api.component';
import { AuthGuard } from './guards/auth.guard';
import { OffreDetailsComponent } from './offre-details/offre-details.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'user-sign-up', component: UserSignUpComponent },
  { path: 'don-form', component: DonneurFormComponent },
  { path: 'sign-up', component: KineSignUpComponent },
  { path: 'sidebar', component: SidebarKineComponent },
  { path: 'session-Kine', component: SessionKineComponent },
  { path: 'offre', component: OffreKineComponent },
  { path: 'carte-offre', component: CartesOffresComponent },
  { path: 'kine-sign-up', component: KineSignUpComponent },
  { path: 'user-sign-up', component: UserSignUpComponent },
  { path: 'mes-reservation-page', component: MesReservationPageComponent },
  { path: 'offre-form', component: OffreFormComponent },

  { path: 'ajouter-offre', component: AjoutOffreComponent },
  {
    path: 'reservation-offre',
    component: MesReservationPageComponent,
    canActivate: [AuthGuard],
  },
  { path: 'contact', component: ContactPageComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'inscription-patient', component: InscriptionPatientComponent },
  { path: 'inscription-donneur', component: InscriptionDonneurComponent },
  { path: 'inscription-kine', component: InscriptionKineComponent },
  { path: 'reservation-patient', component: ShowReservationComponent },
  { path: 'profil-kine', component: EditProfilKineComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'FAQ', component: FAQPageComponent },
  { path: 'materiel', component: DonsMaterielComponent },
  { path: 'dashboard-admin', component: DashboardAdminComponent },
  { path: 'admin-page', component: AdminPageComponent },
  { path: 'stats-offre', component: StatsOffreComponent },
  { path: 'kine-demandes', component: KineDemandesComponent },
  { path: 'wallet-page', component: WalletPageComponent },
  { path: 'profile-admin', component: ProfileAdminComponent },

  { path: 'profil-kine', component: EditProfilKineComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'dashboard-donneur', component: DashboardDonneurComponent },
  { path: 'mes-dons', component: MesDonsComponent },
  { path: 'ajout-don', component: AddDonationComponent },
  { path: 'test-api', component: TestApiComponent },
  {
    path: 'offre/:id',
    component: OffreDetailsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'reservation-offre',
    component: MesReservationPageComponent,
    canActivate: [AuthGuard],
  },
];
