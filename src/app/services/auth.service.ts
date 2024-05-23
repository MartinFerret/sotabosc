import {inject, Injectable} from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public readonly _auth = inject(Auth);
  private readonly _router = inject(Router);
  private readonly _googleProvider = new GoogleAuthProvider();

  googleLogin() {
    return signInWithPopup(this._auth, this._googleProvider);
  }

  googleLogOut() {
    return this._auth.signOut().then(() => {
      this._router.navigate(['/']);
    });
  }
}
