import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from "primeng/divider";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandshake, faTree, faPaw, faHeart } from '@fortawesome/free-solid-svg-icons';
import {NgOptimizedImage} from "@angular/common";


@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [
    TranslateModule,
    DividerModule,
    FontAwesomeModule,
    NgOptimizedImage
  ],
  templateUrl: './who-we-are.component.html',
  styleUrl: './who-we-are.component.scss'
})
export class WhoWeAreComponent {
  faHandshake = faHandshake;
  faTree = faTree;
  faPaw = faPaw;
  faHeart = faHeart;
}
