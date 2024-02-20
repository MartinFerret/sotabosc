import {Component, inject, OnInit, signal} from '@angular/core';
import {MenuItem} from "primeng/api";
import {MenubarModule} from "primeng/menubar";
import {InputTextModule} from "primeng/inputtext";
import {NgOptimizedImage} from "@angular/common";
import {ButtonModule} from "primeng/button";
import {EventService} from "../../../services/event.service";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {EventBarComponent} from "../event-bar/event-bar.component";
import {TranslateService} from "@ngx-translate/core";

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

  ngOnInit() {
    this.loadConfig();
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

  loadConfig() {
    this.#eventService.getEventBarConfig().then((m) => {
      const config = m.data();
      if (config) {
        this.config.set(config['isActive']);
      }
    })
  }
}
