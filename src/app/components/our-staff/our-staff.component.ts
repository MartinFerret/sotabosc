import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {TranslateModule} from "@ngx-translate/core";
import {TitleService} from "../../services/title.service";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-our-staff',
  standalone: true,
    imports: [
        NgOptimizedImage,
        PanelModule,
        TranslateModule,
        DividerModule,
    ],
  templateUrl: './our-staff.component.html',
  styleUrl: './our-staff.component.scss'
})
export class OurStaffComponent {
  private readonly _titleService = inject(TitleService);
  constructor() {
    this._titleService.setTitle('OUR_STAFF.STAFF');
    this._titleService.setDescription("Les persones adultes que acompanyem en aquest espai, ho fem des de l’amor, la presència, l’empatia, la calma i el respecte. Tenim coneixements sobre la natura; el bosc i els animals.");
  }
}
