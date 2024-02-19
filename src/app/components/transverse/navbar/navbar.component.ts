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
        label: 'Qui som',
        routerLink: ['/who-we-are'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-star'
      },
      {
        label: 'Com funciona',
        routerLink: ['/how-it-works'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-cog'
      },
      {
        label: 'El nostre espai',
        routerLink: ['/our-space'],
        routerLinkActiveOptions: true,
        icon: 'pi pi-cloud'
      },
      {
        label: 'Contacte',
        routerLink: ['/contact'],
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
        console.log(config);
      }
    })
  }
}
