import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faLocationDot, faEnvelope, faCamera} from '@fortawesome/free-solid-svg-icons';
import {ReactiveFormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ButtonModule,
    FaIconComponent,
    ReactiveFormsModule,
    TranslateModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faCamera = faCamera;

  private readonly _titleService = inject(TitleService);

  constructor() {
    this._titleService.setTitle('GLOBAL.CONTACT');
  }
}
