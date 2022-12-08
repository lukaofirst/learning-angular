import { Route } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const APP_ROUTES: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'about',
    loadComponent: () =>
      import('./about/about.component').then((c) => c.AboutComponent),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard-routes').then((r) => r.DASHBOARD_ROUTES),
  },
];
