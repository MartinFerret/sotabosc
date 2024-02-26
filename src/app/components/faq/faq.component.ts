import { Component } from '@angular/core';
import {DividerModule} from "primeng/divider";
import {AccordionModule} from "primeng/accordion";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    DividerModule,
    AccordionModule,
    TranslateModule
  ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {

}
