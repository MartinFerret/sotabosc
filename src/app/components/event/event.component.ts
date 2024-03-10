import {ChangeDetectionStrategy, Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Event} from '../../models/event.model';
import {PanelModule} from "primeng/panel";
import {AsyncPipe, CurrencyPipe, NgStyle, SlicePipe} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {DividerModule} from "primeng/divider";
import {Observable, Subscription} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";
import {TranslateModule} from "@ngx-translate/core";
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    PanelModule,
    AsyncPipe,
    CurrencyPipe,
    ButtonModule,
    DividerModule,
    TranslateModule,
    NgStyle,
    SlicePipe,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit, OnDestroy {

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _fireStorage = inject(AngularFireStorage);
  private readonly _titleService = inject(TitleService);

  events$: Event[] = [] as Event[];
  subscription: Subscription = new Subscription();
  constructor() {
    this._titleService.setTitle('GLOBAL.EVENTS');
  }

  ngOnInit() {
    this.loadEvents();
  }

  private loadEvents() {
    this.subscription.add(this._activatedRoute.data.subscribe((events) => {
      this.events$ = events['events'].map((event: Event) => {
        return {
          ...event,
          imageUrl: this.getDownloadURL(event.image),
        };
      });
    }))
  }

  getDownloadURL(path: string): Observable<string | null> {
    const ref = this._fireStorage.ref(path);
    return ref.getDownloadURL();
  }

  displayLabelFromState(eventState: boolean) {
    return eventState ? 'EVENTS.REGISTER' : 'EVENTS.PASSED';
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
