import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {CreateEventComponent} from "./components/create-event/create-event.component";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {OverviewComponent} from "./components/overview/overview.component";
import {EventService} from "../../services/event.service";
import {ConfirmService} from "../../services/confirm.service";
import {BannerPanelComponent} from "./components/banner-panel/banner-panel.component";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TabViewModule,
    CreateEventComponent,
    ToastModule,
    OverviewComponent,
    BannerPanelComponent
  ],
  providers: [MessageService, ConfirmService, ConfirmationService],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit {

  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #eventService = inject(EventService);
  events$: Event[] = [] as Event[];
  ngOnInit() {
    this.#activatedRoute.data.subscribe((data) => {
      this.events$ = data['events'];
    })
  }

  eventDeletions(title: string) {
    this.#eventService.deleteEvent(title);
  }
}
