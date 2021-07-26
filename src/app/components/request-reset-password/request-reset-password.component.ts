import { Component, OnInit } from '@angular/core';
import { InitResetPasswordRequest } from 'src/app/requests/init-reset-password-request.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.css']
})
export class RequestResetPasswordComponent implements OnInit {

  email: string = ''
  message = ''
  success: boolean = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  onInitResetPassword() {

    this.authService.requestResetPassword(new InitResetPasswordRequest(this.email)).subscribe(
      (data: any) => { 
        this.message = data.message;
        this.success = true
      },() => {
        this.success = false;
        this.message = "Sending request to reset your password failed. " + 
        "Please try again later and in case of recurring the issue contact Support Team."
      }
    )
  }

}
