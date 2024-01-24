import { Component } from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PanelModule,
    ButtonModule,
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
