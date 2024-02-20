import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    InputTextModule,
    NgOptimizedImage,
    ButtonModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [] as MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Inici',
        routerLink: ['/'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-home'
      },
      {
        label: 'La nostra pedagogia',
        routerLink: ['/la-nostra-pedagogia'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-star'
      },
      {
        label: 'Un dia a Sotabosc',
        routerLink: ['/un-dia-a-sotabosc'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-sun'
      },
      {
        label: 'El nostre espai',
        routerLink: ['/el-nostre-espai'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-heart'
      },
      {
        label: 'Preguntes freqüents',
        routerLink: ['/preguntes-freqüents'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-search'
      },
      {
        label: 'Contacte',
        routerLink: ['/contacte'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-envelope'
      }
    ]
  }
}
