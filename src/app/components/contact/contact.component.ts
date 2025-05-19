import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {TitleService} from "../../services/title.service";
import {DividerModule} from "primeng/divider";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ButtonModule,
    ReactiveFormsModule,
    TranslateModule,
    DividerModule,
    RouterLink,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  private readonly _titleService = inject(TitleService);

  constructor() {
    this._titleService.setTitle('GLOBAL.CONTACT');
  }
}
