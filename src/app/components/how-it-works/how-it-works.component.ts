import {Component, inject, OnInit, signal} from '@angular/core';
import {TimelineModule} from "primeng/timeline";
import {NgOptimizedImage} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {DividerModule} from "primeng/divider";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {TimelineItems} from "../../models/event.model";
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-how-it-works',
  standalone: true,
    imports: [
        TimelineModule,
        NgOptimizedImage,
        PanelModule,
        DividerModule,
        TranslateModule,
    ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent implements OnInit {
  events = signal([] as TimelineItems[]);
  private readonly _translateService = inject(TranslateService);
  private readonly _titleService = inject(TitleService);
  constructor() {
    this._titleService.setTitle('GLOBAL.DAY_IN_SOTABOSC');
    this._titleService.setDescription("Com és un dia en una escoleta alternativa?\n" +
      "En el nostre espai seguim uns horarios i rutines de vegades canviants que us expliquem a continuació.");
  }

  ngOnInit() {
    this.events.set([
      {
        status: this._translateService.instant('HOW_IT_WORKS.TIMELINE_ONE'),
        date: '8h30 - 9h15',
      },
      {
        status: this._translateService.instant('HOW_IT_WORKS.TIMELINE_TWO'),
        date: '9h30 - 10h15',
      },
      {
        status: this._translateService.instant('HOW_IT_WORKS.TIMELINE_THREE'),
        date: '10h15 - 10h30',
      },
      {
        status: this._translateService.instant('HOW_IT_WORKS.TIMELINE_FOUR'),
        date: '10h30 - 12h',
      },
      {
        status: this._translateService.instant('HOW_IT_WORKS.TIMELINE_FIVE'),
        date: '12h',
      },
      {
        status: this._translateService.instant('HOW_IT_WORKS.TIMELINE_SIX'),
        date: '12h15',
      },
      {
        status: this._translateService.instant('HOW_IT_WORKS.TIMELINE_SEVEN'),
        date: '12h30',
      },
      {
        status: this._translateService.instant('HOW_IT_WORKS.TIMELINE_EIGHT'),
        date: '15h - 15h30',
      },
    ])
  }
}
