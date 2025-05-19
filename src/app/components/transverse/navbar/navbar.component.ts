import {Component, inject, OnInit, signal} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {EventService} from "../../../services/event.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {TranslateService} from "@ngx-translate/core";
import {AuthService} from "../../../services/auth.service";

@Component({
  selector: 'app-navbar',
  standalone: true,
  providers: [EventService, AngularFireAuth],
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

  readonly #eventService = inject(EventService);

  items: MenuItem[] = [] as MenuItem[];
  config = signal(false);
  readonly translateService = inject(TranslateService);
  readonly authService = inject(AuthService);

  ngOnInit() {
    this.loadConfig();
    this.constructMenu();
    this.translateService.onLangChange.subscribe(() => {
      this.constructMenu();
    })
  }

  constructMenu() {
    this.items = [
      {
        label: this.translateService.instant('GLOBAL.HOME'),
        routerLink: ['/'],
        routerLinkActiveOptions: true,
      },
      {
        label: this.translateService.instant('GLOBAL.WHO_WE_ARE'),
        items: [
          {
            label: this.translateService.instant('OUR_STAFF.STAFF'),
            routerLink: ['/les-acompanyants'],
            routerLinkActiveOptions: true,
          },
          {
            label: this.translateService.instant('GLOBAL.OUR_PEDAGOGY'),
            routerLink: ['/la-nostra-pedagogia'],
            routerLinkActiveOptions: true,
          },
          {
            label: this.translateService.instant('GLOBAL.OUR_SPACE'),
            routerLink: ['/el-nostre-espai'],
            routerLinkActiveOptions: true,
          },
          {
            label: this.translateService.instant('GLOBAL.DAY_IN_SOTABOSC'),
            routerLink: ['/un-dia-a-sotabosc'],
            routerLinkActiveOptions: true,
          },
        ]
      },
      {
        label: this.translateService.instant('GLOBAL.EVENTS'),
        routerLink: ['/noticies'],
        routerLinkActiveOptions: true,
      },
      {
        label: this.translateService.instant('GLOBAL.FAQ'),
        routerLink: ['/preguntes-freqüents'],
        routerLinkActiveOptions: true,
      },
      {
        label: this.translateService.instant('GLOBAL.CONTACT'),
        routerLink: ['/contacte'],
        routerLinkActiveOptions: true,
      },
      {
        label: "Idioma",
        icon: 'pi pi-globe',
        items: [
          {
            label: this.translateService.instant('GLOBAL.SPANISH'),
            command: () => {
              this.translateService.use('es');
            },
          },
          {
            label: this.translateService.instant('GLOBAL.CATALAN'),
            command: () => {
              this.translateService.use('ca');
            },
          },
        ]
      }
    ]
  }

  loadConfig() {
    this.#eventService.getEventBarConfig().then((m: any) => {
      const config = m.data();
      if (config) {
        this.config.set(config['isActive']);
      }
    })
  }

  signOut() {
    this.authService.googleLogOut();
  }
}
