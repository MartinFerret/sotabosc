import { Routes } from '@angular/router';
import {EventService} from "./services/event.service";
import {inject} from "@angular/core";
import {adminGuard} from "./auth.guard";

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./components/home/home.component').then(c => c.HomeComponent),
    title: 'Inici'
  },
  {
    path: 'un-dia-a-sotabosc',
    loadComponent: () => import('./components/how-it-works/how-it-works.component').then(c => c.HowItWorksComponent),
    title: 'Un dia a sotabosc'
  },
  {
    path: 'la-nostra-pedagogia',
    loadComponent: () => import('./components/who-we-are/who-we-are.component').then(c => c.WhoWeAreComponent),
    title: 'La nostra pedagogia'
  },
  {
    path: 'noticies',
    loadComponent: () => import('./components/event/event.component').then(c => c.EventComponent),
    resolve: {
      events: () => inject(EventService).getEventsByStatus(),
    },
    title: 'Inici'
  },
  {
    path: 'admin',
    canActivate: [adminGuard],
    loadComponent: () => import('./components/admin-dashboard/admin-dashboard.component').then(c => c.AdminDashboardComponent),
    resolve: {
      events: () => inject(EventService).getEvents(),
    },
    title: 'Admin'
  },
  {
    path: 'el-nostre-espai',
    loadComponent: () => import('./components/our-space/our-space.component').then(c => c.OurSpaceComponent),
    title: 'El nostre espai'
  },
  {
    path: 'sotabosc_admin',
    loadComponent: () => import('./components/transverse/admin-interface/admin-interface.component').then((c) => c.AdminInterfaceComponent),
    title: 'Inici'
  },
  {
    path: 'contacte',
    loadComponent: () => import('./components/contact/contact.component').then(c => c.ContactComponent),
    title: 'Contacte'
  },
  {
    path: 'preguntes-freqüents',
    loadComponent: () => import('./components/faq/faq.component').then(c => c.FaqComponent),
    title: 'Preguntes Freqüents'
  },
  {
    path: 'les-acompanyants',
    loadComponent: () => import('./components/our-staff/our-staff.component').then((c) => c.OurStaffComponent),
    title: 'Les acompanyants'
  },
  {
    path: '**',
    loadComponent: () => import('./components/transverse/notfound/notfound.component').then((c) => c.NotfoundComponent),
    title: 'Not found'
  }
];
