import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { RegisterRequest } from 'src/app/requests/register-request.model';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentsStateService } from 'src/app/services/components-state.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  success = false;

  registerRequest: RegisterRequest = new RegisterRequest();

  constructor(private componentStateService: ComponentsStateService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onRegister() {
    this.authService.register(this.registerRequest).subscribe(
      () => this.success = true
    )
  }
}
