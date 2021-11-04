import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from 'src/app/models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  endpoint: string = `http://localhost:3000`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // getter ini akan menentukan apakah akses diperbolehkan atau tidak,
  // melalui sebuah authorization token pada local storage.

  // getter ini akan digunakan pada authentication guard.
  //

  get isAuthenticated() {
    // double-bang (!!) akan mengembalikan nilai truthy/falsy
    // dari sebuah value, beda dari negation (!) yang mengembalikan
    // nilai kebalikannya.
    return !!this.getAuthorizationToken()
  }

  // ambil pseudo-setter dan pseudo-getter untuk app_token

  getAuthorizationToken () {
    return localStorage.getItem('app_token')
  }

  setAuthorizationToken (token: string) {
    return localStorage.setItem('app_token', token)
  }

  signUp(user: User): Observable<any>{
    const api = `${this.endpoint}/register`;

    return this.http
    .post(api, user)
    .pipe( catchError(this.handleError) )
  }

  signIn(user: User) {
    const api = `${this.endpoint}/login`;

    return this.http
    .post(api, user)
    .pipe( catchError(this.handleError) )
  }

  handleError(err: HttpErrorResponse){
    if(err.error instanceof ErrorEvent)
      return throwError(err.error.message)
    else
      return throwError(`Server-side error code: ${err.status}\nMessage: ${err.message}`)
  }
}
