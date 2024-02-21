import {Component} from '@angular/core';
import {ButtonModule} from "primeng/button";

@Component({
  selector: 'app-event-bar',
  standalone: true,
  imports: [
    ButtonModule
  ],
  templateUrl: './event-bar.component.html',
  styleUrl: './event-bar.component.scss'
})
export class EventBarComponent {

}
