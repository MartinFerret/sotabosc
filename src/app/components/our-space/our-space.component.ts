import {ChangeDetectionStrategy, Component} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {DividerModule} from "primeng/divider";

@Component({
  selector: 'app-our-space',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    TranslateModule,
    DividerModule
  ],
  templateUrl: './our-space.component.html',
  styleUrl: './our-space.component.scss'
})
export class OurSpaceComponent {

}
