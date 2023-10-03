import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'kahoot',
    pathMatch: 'full',
  },
  {
    path: 'kahoot',
    loadComponent: () => import('./demo_state_machine/kahoot/kahoot.page').then( m => m.KahootPage)
  },
];
