import {Component, inject, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {TranslateService} from "@ngx-translate/core";

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
  translateService = inject(TranslateService);

  ngOnInit() {
    this.items = [
      {
        label: this.translateService.instant('GLOBAL.HOME'),
        routerLink: ['/'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-home'
      },
      {
        label: this.translateService.instant('GLOBAL.OUR_PEDAGOGY'),
        routerLink: ['/la-nostra-pedagogia'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-star'
      },
      {
        label: this.translateService.instant('GLOBAL.DAY_IN_SOTABOSC'),
        routerLink: ['/un-dia-a-sotabosc'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-sun'
      },
      {
        label: this.translateService.instant('GLOBAL.OUR_SPACE'),
        routerLink: ['/el-nostre-espai'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-heart'
      },
      {
        label: this.translateService.instant('GLOBAL.FAQ'),
        routerLink: ['/preguntes-freqüents'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-search'
      },
      {
        label: this.translateService.instant('GLOBAL.CONTACT'),
        routerLink: ['/contacte'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-envelope'
      }
    ]
  }  }
