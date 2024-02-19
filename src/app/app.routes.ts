import { Routes } from '@angular/router';
import {eventResolver} from "./resolvers/event.resolver";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: 'how-it-works',
    loadComponent: () => import('./components/how-it-works/how-it-works.component').then(c => c.HowItWorksComponent),
  },
  {
    path: 'who-we-are',
    loadComponent: () => import('./components/who-we-are/who-we-are.component').then(c => c.WhoWeAreComponent),
  },
  {
    path: 'events',
    loadComponent: () => import('./components/event/event.component').then(c => c.EventComponent),
    resolve: {
      events: eventResolver,
    }
  },
  {
    path: 'admin',
    loadComponent: () => import('./components/admin-dashboard/admin-dashboard.component').then(c => c.AdminDashboardComponent),
    resolve: {
      events: eventResolver,
    }
  },
  {
    path: 'our-space',
    loadComponent: () => import('./components/our-space/our-space.component').then(c => c.OurSpaceComponent),
  },
  {
    path: 'sotabosc_admin',
    loadComponent: () => import('./components/transverse/admin-interface/admin-interface.component').then((c) => c.AdminInterfaceComponent),
  },
];
