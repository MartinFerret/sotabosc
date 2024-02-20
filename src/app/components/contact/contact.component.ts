import { Component } from '@angular/core';
import {ButtonModule} from "primeng/button";
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faLocationDot, faEnvelope, faCamera} from '@fortawesome/free-solid-svg-icons';
import {ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    ButtonModule,
    FaIconComponent,
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  faLocationDot = faLocationDot;
  faEnvelope = faEnvelope;
  faCamera = faCamera;
}
