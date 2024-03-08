import {Component, inject, OnChanges, OnInit, signal, SimpleChanges} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {EventService} from "../../../services/event.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {EventBarComponent} from "../event-bar/event-bar.component";
import {TranslateService} from "@ngx-translate/core";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-navbar',
  standalone: true,
  providers: [EventService, AngularFireAuth],
  imports: [
    MenubarModule,
    InputTextModule,
    NgOptimizedImage,
    ButtonModule,
    EventBarComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {

  readonly #eventService = inject(EventService);

  items: MenuItem[] = [] as MenuItem[];
  config = signal(false);
  translateService = inject(TranslateService);

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
        icon: 'pi pi-home'
      },
      {
        label: this.translateService.instant('GLOBAL.WHO_WE_ARE'),
        icon: 'pi pi-cloud',
        items: [
          {
            label: this.translateService.instant('OUR_STAFF.STAFF'),
            routerLink: ['/les-acompanyants'],
            routerLinkActiveOptions: true,
            icon: 'pi pi-user'
          },
          {
            label: this.translateService.instant('GLOBAL.OUR_PEDAGOGY'),
            routerLink: ['/la-nostra-pedagogia'],
            routerLinkActiveOptions: true,
            icon: 'pi pi-star'
          },
          {
            label: this.translateService.instant('GLOBAL.OUR_SPACE'),
            routerLink: ['/el-nostre-espai'],
            routerLinkActiveOptions: true,
            icon: 'pi pi-heart'
          },
          {
            label: this.translateService.instant('GLOBAL.DAY_IN_SOTABOSC'),
            routerLink: ['/un-dia-a-sotabosc'],
            routerLinkActiveOptions: true,
            icon: 'pi pi-sun'
          },
        ]
      },
      {
        label: this.translateService.instant('GLOBAL.EVENTS'),
        routerLink: ['/noticies'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-clock'
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
}
