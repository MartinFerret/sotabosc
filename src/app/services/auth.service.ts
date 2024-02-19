import {inject, Injectable} from '@angular/core';
import {Auth, GoogleAuthProvider, signInWithPopup} from "@angular/fire/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _auth = inject(Auth);
  private readonly _googleProvider = new GoogleAuthProvider();

  googleLogin() {
    return signInWithPopup(this._auth, this._googleProvider);
  }
}
