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
    this._titleService.setDescription("Ens basem en diferents pedagogies vives i actives on el punt en comú és el respecte a totes les dimensions de l’infant. Visitem i vivim el bosc moltes estones a la setmana, també estem a la granja amb els animals que s’hi troben i a les instal.lacions més lúdiques que allà es troben. Al bosc el contacte amb l’entorn ens calma i ens ajuda a fomentar la imaginació amb els materials que hi trobem, a millorar habilitats motrius en diferents terrenys i textures.Els grups son heterogenis en edats. Acollim infants dels 18 mesos als 6 anys. Aprenentatge entre iguals, habilitats socials, exemple i diversitat.");
  }
}
