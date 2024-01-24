import {Component, OnInit} from '@angular/core';
import {TimelineModule} from "primeng/timeline";
import {NgOptimizedImage} from "@angular/common";
import {PanelModule} from "primeng/panel";

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [
    TimelineModule,
    NgOptimizedImage,
    PanelModule
  ],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent implements OnInit {
  events: any[] = [];

  ngOnInit() {
    this.events = [
      {
        status: "Drop off time",
        date: '8h30 - 9h15',
      },
      {
        status: "Hello song",
        date: '9h30',
      },
      {
        status: "Eat time",
        date: '10h30',
      },
      {
        status: "Free activity",
        date: '11h',
      },
      {
        status: "Lunch time",
        date: '12h30',
      },
      {
        status: "Free activity",
        date: '14h',
      },
      {
        status: "Pick up time",
        date: '15h30',
      },
    ]
  }
}
