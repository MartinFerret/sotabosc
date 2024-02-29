import {inject, Injectable, OnDestroy} from '@angular/core';
import {Title} from "@angular/platform-browser";
import {TranslateService} from "@ngx-translate/core";
import {Subscription} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TitleService implements OnDestroy{

  titleApiService = inject(Title);
  translateService = inject(TranslateService);
  subscription = new Subscription();
  setTitle(key: string) {
    this.subscription.add(this.translateService.onLangChange.subscribe(() => {
      this.titleApiService.setTitle(this.translateService.instant(key));
    }))
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
