import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {PanelModule} from "primeng/panel";
import {ButtonModule} from "primeng/button";
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";
import {RouterLink} from "@angular/router";
import {FaIconComponent} from '@fortawesome/angular-fontawesome';
import {faPaw, faSeedling, faTree} from '@fortawesome/free-solid-svg-icons';
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    PanelModule,
    ButtonModule,
    NgOptimizedImage,
    TranslateModule,
    RouterLink,
    FaIconComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent {
  faSeedling = faSeedling;
  faPaw = faPaw;
  faTree = faTree;

  private readonly _titleService = inject(TitleService);
  constructor() {
    this._titleService.setTitle('GLOBAL.HOME');
  }
}
