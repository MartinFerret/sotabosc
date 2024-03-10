import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from "primeng/divider";
import {NgOptimizedImage} from "@angular/common";
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-our-space',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        TranslateModule,
        DividerModule,
        NgOptimizedImage,
    ],
  templateUrl: './our-space.component.html',
  styleUrl: './our-space.component.scss'
})
export class OurSpaceComponent {
  private readonly _titleService = inject(TitleService);
  constructor() {
    this._titleService.setTitle('GLOBAL.OUR_SPACE');
    this._titleService.setDescription("Com a instal.lacions, Disposem de diferents espais interiors i exteriors. Interiors tenim un petit refugi amb dues sales grans per a cadascun dels grups d’infants. Una sala amb materials i propostes i a l’altra el mateix però afegin un wc i una habitació per dormir.");
  }
}
