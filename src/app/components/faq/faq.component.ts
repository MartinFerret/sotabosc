import {Component, inject} from '@angular/core';
import {DividerModule} from "primeng/divider";
import {AccordionModule} from "primeng/accordion";
import {TranslateModule} from "@ngx-translate/core";
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-faq',
  standalone: true,
    imports: [
        DividerModule,
        AccordionModule,
        TranslateModule,
    ],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss'
})
export class FaqComponent {
  private readonly _titleService = inject(TitleService);
  constructor() {
    this._titleService.setTitle('GLOBAL.FAQ');
  }
}
