import {Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NavbarComponent} from "./components/transverse/navbar/navbar.component";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sotabosc-angular-firebase';

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ca');
  }
}
