import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/transverse/navbar/navbar.component";
import {TranslateService} from "@ngx-translate/core";
import {FooterComponent} from "./components/transverse/footer/footer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sotabosc-angular-firebase';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ca');
  }
}
