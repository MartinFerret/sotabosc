import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";
import {AccordionModule} from "primeng/accordion";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    DividerModule,
    AccordionModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
