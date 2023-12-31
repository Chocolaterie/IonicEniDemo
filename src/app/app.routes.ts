import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'tweet-vm-version',
    pathMatch: 'full',
  },
  {
    path: 'kahoot',
    loadComponent: () => import('./demo_state_machine/kahoot/kahoot.page').then( m => m.KahootPage)
  },
  {
    path: 'demo-m5',
    loadComponent: () => import('./demo_alert_toast/demo-m5/demo-m5.page').then( m => m.DemoM5Page)
  },
  {
    path: 'pageobeserver',
    loadComponent: () => import('./demo-observer/pageobeserver/pageobeserver.page').then( m => m.PageobeserverPage)
  },
  {
    path: 'tweet-page',
    loadComponent: () => import('./services/tweet-page/tweet-page.page').then( m => m.TweetPagePage)
  },
  {
    path: 'tweet-vm-version',
    loadComponent: () => import('./services/tweet-vm-version/tweet-vm-version.page').then( m => m.TweetVmVersionPage)
  },
];
