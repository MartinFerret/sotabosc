import {ChangeDetectionStrategy, Component, inject, OnInit} from '@angular/core';
import {Event} from '../../models/event.model';
import {PanelModule} from "primeng/panel";
import {AsyncPipe, CurrencyPipe, NgForOf} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {ButtonModule} from "primeng/button";
import {BadgeModule} from "primeng/badge";
import {DividerModule} from "primeng/divider";
import {Observable} from "rxjs";
import {AngularFireStorage} from "@angular/fire/compat/storage";

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [
    PanelModule,
    NgForOf,
    AsyncPipe,
    CurrencyPipe,
    ButtonModule,
    BadgeModule,
    DividerModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './event.component.html',
  styleUrl: './event.component.scss'
})
export class EventComponent implements OnInit {

  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _fireStorage = inject(AngularFireStorage);

  events$: Event[] = [] as Event[];

  ngOnInit() {
    this.loadEvents();
  }

  private loadEvents() {
    this._activatedRoute.data.subscribe((events) => {
      this.events$ = events['events'].map((event: Event) => {
        return {
          ...event,
          imageUrl: this.getDownloadURL(event.image),
        };
      });
    })
  }

  getDownloadURL(path: string): Observable<string | null> {
    const ref = this._fireStorage.ref(path);
    return ref.getDownloadURL();
  }
}
