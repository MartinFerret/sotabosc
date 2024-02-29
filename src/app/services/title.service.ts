import {inject, Injectable} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  titleApiService = inject(Title);
  translateService = inject(TranslateService);
  setTitle(key: string) {
    this.translateService.onLangChange.subscribe(() => {
      this.titleApiService.setTitle(this.translateService.instant(key));
    })
  }
}
