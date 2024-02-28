import {Component, inject, OnInit, signal} from '@angular/core';
import {TimelineModule} from "primeng/timeline";
import {NgOptimizedImage} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {DividerModule} from "primeng/divider";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TimelineItems} from "../../models/event.model";

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    TimelineModule,
    NgOptimizedImage,
    PanelModule,
    DividerModule,
    TranslateModule
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent implements OnInit {
  events = signal([] as TimelineItems[]);
  translateService = inject(TranslateService);

  ngOnInit() {
    this.events.set([
      {
        status: this.translateService.instant('HOW_IT_WORKS.TIMELINE_ONE'),
        date: '8h30 - 9h15',
      },
      {
        status: this.translateService.instant('HOW_IT_WORKS.TIMELINE_TWO'),
        date: '9h30 - 10h15',
      },
      {
        status: this.translateService.instant('HOW_IT_WORKS.TIMELINE_THREE'),
        date: '10h15 - 10h30',
      },
      {
        status: this.translateService.instant('HOW_IT_WORKS.TIMELINE_FOUR'),
        date: '10h30 - 12h',
      },
      {
        status: this.translateService.instant('HOW_IT_WORKS.TIMELINE_FIVE'),
        date: '12h',
      },
      {
        status: this.translateService.instant('HOW_IT_WORKS.TIMELINE_SIX'),
        date: '12h15',
      },
      {
        status: this.translateService.instant('HOW_IT_WORKS.TIMELINE_SEVEN'),
        date: '12h30',
      },
      {
        status: this.translateService.instant('HOW_IT_WORKS.TIMELINE_EIGHT'),
        date: '15h - 15h30',
      },
    ])
  }
}
