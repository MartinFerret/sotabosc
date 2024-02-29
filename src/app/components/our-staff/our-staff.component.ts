import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {PanelModule} from "primeng/panel";
import {TranslateModule} from "@ngx-translate/core";
import {TitleService} from "../../services/title.service";

@Component({
  selector: 'app-our-staff',
  standalone: true,
  imports: [
    NgOptimizedImage,
    PanelModule,
    TranslateModule
  ],
  templateUrl: './our-staff.component.html',
  styleUrl: './our-staff.component.scss'
})
export class OurStaffComponent {
  private readonly _titleService = inject(TitleService);
  constructor() {
    this._titleService.setTitle('OUR_STAFF.STAFF');
  }
}
