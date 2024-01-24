import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    InputTextModule,
    NgOptimizedImage
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  items: MenuItem[] = [] as MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        routerLink: ['/'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-home'
      },
      {
        label: 'How it works',
        routerLink: ['/how-it-works'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-cog'
      },
      {
        label: 'Our space',
        routerLink: ['/our-space'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-cloud'
      },
      {
        label: 'Events',
        routerLink: ['/events'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-star'
      },
      {
        label: 'Contact',
        routerLink: ['/contact'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-envelope'
      }
    ]
  }
}
