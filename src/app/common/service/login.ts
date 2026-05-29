import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {LoginData} from '../data/login';
import {Observable} from 'rxjs';
import {LoginResponse} from '../data/login-response';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private _apiBaseUrl = "tp/standalone-login-api";

  constructor(private _http: HttpClient) {}

  public postLogin$(login: LoginData): Observable<LoginResponse> {
    const url = this._apiBaseUrl + "/public/auth";
    return this._http.post<LoginResponse>(url, login);
  }
}
