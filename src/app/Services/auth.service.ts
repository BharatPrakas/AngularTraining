import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.development';
import { HttpRoutingService } from './http-routing.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signinUrl = environment.signinApi;
  signupUrl = environment.signupApi;
  forgotUrl = environment.forgotApi;
  constructor(
    private httpRequest: HttpClient,
    private route: Router,
    private httpRouting: HttpRoutingService
  ) { }
  isAuthenticate(): boolean {
    const token = sessionStorage.getItem('token');
    if (token !== null) {
      return true;
    } else {
      // 
      return false;
    }
  }
  setToken(token: any) {
    sessionStorage.setItem('token', token);
  }
  signin(data: any) {
    return this.httpRequest
      .post<{ idToken: String }>(
        this.signinUrl,
        {
          email: data.email,
          password: data.password
        });
  }

  signup(data: any) {
    return this.httpRequest
      .post<{ idToken: String, error: object }>(
        this.signupUrl,
        {
          email: data.email,
          password: data.password
        });
  }

  forgot(data: any) {
    return this.httpRequest.post(this.forgotUrl, data);
  }

  signout() {
    sessionStorage?.removeItem('token');
  }
}
