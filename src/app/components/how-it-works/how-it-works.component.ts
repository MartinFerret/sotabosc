import {Component, OnInit, signal} from '@angular/core';
import {TimelineModule} from "primeng/timeline";
import {NgOptimizedImage} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {DividerModule} from "primeng/divider";
import {TranslateModule} from "@ngx-translate/core";
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

  ngOnInit() {
    this.events.set([
      {
        status: "Entrada relaxada : Les famílies arriben i poden passar una estona al refugi amb el seu fill o la seva filla.\n" +
          "Després recollim els materials utilitzats i ens preparem per la rotllana.",
        date: '8h30 - 9h15',
      },
      {
        status: "Bon dia i dinàmica dirigida.",
        date: '9h30 a 10h15',
      },
      {
        status: "Ruta fins al bosc o la granja.",
        date: '10h15 a 10h30',
      },
      {
        status: "Esmorzar i joc lliure : Cantem una cançó abans de començar a menjar, bon profit! Després podem jugar una\n" +
          "estona al bosc o a algun espai de la granja.",
        date: '10h30 a 12h',
      },
      {
        status: "Tornem al refugi.",
        date: '12h',
      },
      {
        status: "“L'hora del conte” i ens acomiadem dels infants que marxen a dinar a casa.",
        date: '12h15',
      },
      {
        status: "Dinar i migdiada o joc lliure.",
        date: '12h30',
      },
      {
        status: "Recollida relaxada.",
        date: '15h a 15h30',
      },
    ])
  }
}
