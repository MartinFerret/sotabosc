import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faLocationDot, faEnvelope, faCamera, faPhone} from '@fortawesome/free-solid-svg-icons';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {TitleService} from "../../services/title.service";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ButtonModule,
    FaIconComponent,
    ReactiveFormsModule,
    TranslateModule,
    DividerModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faCamera = faCamera;
  faPhone = faPhone;

  private readonly _titleService = inject(TitleService);

  constructor() {
    this._titleService.setTitle('GLOBAL.CONTACT');
  }
}
