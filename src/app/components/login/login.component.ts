import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginRequest } from 'src/app/requests/login-request.model';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentsStateService } from 'src/app/services/components-state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRequest: LoginRequest = new LoginRequest()

  constructor(private componentStateService: ComponentsStateService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin(){
    this.authService.login(this.loginRequest).subscribe(
      () => {
        this.authService.isUserLoggedIn$.next(true)
        this.router.navigateByUrl("/dashboard")
      }
    )
  }
}
