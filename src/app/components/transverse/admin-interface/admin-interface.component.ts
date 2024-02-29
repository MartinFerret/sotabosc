import {Component, inject} from '@angular/core';
import {ButtonModule} from "primeng/button";
import {environment} from "../../../../environments/environment";
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-admin-interface',
  standalone: true,
  imports: [
    ButtonModule,
    TranslateModule
  ],
  templateUrl: './admin-interface.component.html',
  styleUrl: './admin-interface.component.scss'
})
export class AdminInterfaceComponent {

  readonly #authService = inject(AuthService);
  readonly #router = inject(Router);
  signInWithGoogle () {
    this.#authService.googleLogin().then((result) => {
      if (result && result.user.email === environment.email ||
          result.user.email === environment.email2) {
        this.#router.navigate(['/admin']);
      } else {
        this.#router.navigate(['']);
      }
    })
  }
}
