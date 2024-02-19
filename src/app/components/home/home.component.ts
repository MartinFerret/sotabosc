import {Component} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Auth, signInWithPopup} from "@angular/fire/auth";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PanelModule,
    ButtonModule,
    NgOptimizedImage,
    TranslateModule,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
