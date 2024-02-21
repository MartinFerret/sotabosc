import {ChangeDetectionStrategy, Component, EventEmitter, inject, OnInit, Output, signal} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {EventService} from "../../../../services/event.service";
import {InputSwitchModule} from "primeng/inputswitch";
import {EventBar} from "../../../../models/event.model";
import {signInWithPopup} from "@angular/fire/auth";
import {ButtonModule} from "primeng/button";
import {Router} from "@angular/router";

@Component({
  selector: 'app-banner-panel',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputSwitchModule,
    ButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './banner-panel.component.html',
  styleUrl: './banner-panel.component.scss'
})
export class BannerPanelComponent implements OnInit {
  bannerForm = new FormGroup({
    status: new FormControl(false)
  });
  config : boolean = false;
  @Output() eventBarActive = new EventEmitter<boolean>();

  readonly #eventService = inject(EventService);
  readonly #router = inject(Router);

  ngOnInit() {
    this.#eventService.getEventBarConfig().then((config) => {
      const configData = config.data();
      if (configData) {
        this.config = configData['isActive'];
      }
    })
  }

  modifyEventBar() {
    this.#eventService.modifyEventBar({isActive: !this.config});
    this.#router.navigate(['/']);
  }
}
