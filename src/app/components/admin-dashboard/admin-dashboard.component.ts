import {ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {TabViewModule} from "primeng/tabview";
import {CreateEventComponent} from "./components/create-event/create-event.component";
import {ToastModule} from "primeng/toast";
import {ConfirmationService, MessageService} from "primeng/api";
import {ActivatedRoute} from "@angular/router";
import {OverviewComponent} from "./components/overview/overview.component";
import {EventService} from "../../services/event.service";
import {ConfirmService} from "../../services/confirm.service";
import {Subscription} from "rxjs";
import {Event} from "../../models/event.model";

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TabViewModule,
    CreateEventComponent,
    ToastModule,
    OverviewComponent,
  ],
  providers: [MessageService, ConfirmService, ConfirmationService],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent implements OnInit, OnDestroy {

  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #eventService = inject(EventService);
  private readonly _cdref = inject(ChangeDetectorRef);
  events$: Event[] = [] as Event[];
  subscription: Subscription = new Subscription();

  ngOnInit() {
    this.subscription.add(this.#activatedRoute.data.subscribe((data) => {
      this.events$ = data['events'];
    }))
  }

  async eventDeletions(title: string) {
    await this.#eventService.deleteEvent(title);
    this.events$ = this.events$.filter((event: Event) => event.title !== title);
    this._cdref.detectChanges();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
