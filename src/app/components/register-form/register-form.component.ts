import { Component, OnInit } from '@angular/core';
import { RegisterRequest } from 'src/app/requests/register-request.model';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentsStateService } from 'src/app/services/components-state.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerRequest: RegisterRequest = new RegisterRequest();

  constructor(private componentStateService: ComponentsStateService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  loginFormRequested() {
    this.componentStateService.loginFormRequested()
  }

  onRegister() {
    this.authService.register(this.registerRequest).subscribe(
      () => this.componentStateService.registered()
    )
  }
}
