import { Routes } from '@angular/router';
import { PresentationTuteurAbdessalemComponent } from './presentation-tuteur-abdessalem/presentation-tuteur-abdessalem.component';
import { AbdessalemComponent } from './abdessalem/abdessalem.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: AbdessalemComponent },
  { path: 'cours-routage', component: PresentationTuteurAbdessalemComponent },
];
