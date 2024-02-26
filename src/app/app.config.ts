import {APP_INITIALIZER, ApplicationConfig, importProvidersFrom} from '@angular/core';
import {
  InMemoryScrollingOptions,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling
} from '@angular/router';
import { routes } from './app.routes';
import {provideAnimations} from "@angular/platform-browser/animations";
import {TranslateLoader, TranslateModule, TranslateService} from "@ngx-translate/core";
import {HttpClient, provideHttpClient} from "@angular/common/http";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import {initializeApp, provideFirebaseApp} from "@angular/fire/app";
import {environment} from "../environments/environment";
import {getAuth, provideAuth} from "@angular/fire/auth";
import {getFirestore, provideFirestore} from "@angular/fire/firestore";
import {getStorage, provideStorage} from "@angular/fire/storage";
import {AngularFireModule} from "@angular/fire/compat";

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled',
};

export function appInitializerFactory(translate: TranslateService) {
  return () => {
    translate.setDefaultLang('es');
    return translate.use('es').toPromise();
  };
}

export const appConfig: ApplicationConfig = {
  providers: [  {
    provide: APP_INITIALIZER,
    useFactory: appInitializerFactory,
    deps: [TranslateService],
    multi: true
  },provideRouter(routes, withComponentInputBinding(), withInMemoryScrolling(scrollConfig)), importProvidersFrom([
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())
  ]), provideAnimations(), provideHttpClient(), TranslateModule.forRoot({
    defaultLanguage: 'es',
    loader: {
      provide: TranslateLoader,
      useFactory: HttpLoaderFactory,
      deps: [HttpClient],
    },
  }).providers!],
};
