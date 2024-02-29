import {Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from "primeng/divider";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandshake, faTree, faPaw, faHeart } from '@fortawesome/free-solid-svg-icons';
import {NgOptimizedImage} from "@angular/common";
import {TitleService} from "../../services/title.service";


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

  private readonly _titleService = inject(TitleService);
  constructor() {
    this._titleService.setTitle('GLOBAL.OUR_PEDAGOGY');
  }
}
