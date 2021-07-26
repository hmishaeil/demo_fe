import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest } from '../requests/login-request.model';
import { LoginResponse } from '../responses/login-response.model';
import { environment } from '../../environments/environment';
import { RegisterRequest } from '../requests/register-request.model';
import { RegisterResponse } from '../responses/register-response.model';
import { EmailVerificationResponse } from '../responses/email-verification-response.model';
import { BehaviorSubject, Subject } from 'rxjs';
import { InitResetPasswordRequest } from '../requests/init-reset-password-request.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private API_URL = environment.API_URL;

  isUserLoggedIn$: Subject<boolean> = new Subject<boolean>();

  constructor(private http: HttpClient) { }

  register(registerRequest: RegisterRequest) {
    return this.http.post<RegisterResponse>(this.API_URL + "/register", registerRequest);
  }

  verifyEmail(uuid: string) {
    return this.http.get<EmailVerificationResponse>(this.API_URL + `/verify-email/${uuid}`);
  }

  login(loginRequest: LoginRequest) {
    return this.http.post<LoginResponse>(this.API_URL + "/login", loginRequest);
  }

  requestResetPassword(resetPasswordRequest: InitResetPasswordRequest) {
    return this.http.post(this.API_URL + "/request-reset-password", resetPasswordRequest);
  }

}
