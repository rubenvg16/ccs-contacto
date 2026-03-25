import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { ServiciosComponent } from './pages/servicios.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'contacto', component: ContactComponent },
  { path: '**', redirectTo: '' }
];
