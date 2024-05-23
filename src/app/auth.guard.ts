import {inject} from '@angular/core';
import {CanActivateFn, Router} from '@angular/router';
import {Auth} from "@angular/fire/auth";
import {Observable} from "rxjs";

export const adminGuard: CanActivateFn = () => {
  const adminService = inject(Auth);
  const router = inject(Router);
  return new Observable<boolean>((observer) => {
    adminService.onAuthStateChanged((user) => {
      if (user) {
        observer.next(true);
      } else {
        router.navigate(['/']);
        observer.next(false);
      }
      observer.complete();
    });
  });
};
