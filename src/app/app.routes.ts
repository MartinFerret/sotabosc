import { Routes } from '@angular/router';

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
    path: 'el-nostre-espai',
    loadComponent: () => import('./components/our-space/our-space.component').then(c => c.OurSpaceComponent),
    title: 'El nostre espai'
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
];
