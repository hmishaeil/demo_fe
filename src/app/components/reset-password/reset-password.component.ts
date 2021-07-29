import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResetPasswordRequest } from 'src/app/requests/reset-password-request.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  password = ''
  passwordConfirmation = ''

  success = false
  message = ''
  uuid = ''

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.uuid = this.route.snapshot.params.uuid;
  }

  onResetPassword() {

    this.authService.resetPassword(this.uuid, new ResetPasswordRequest(this.password)).subscribe(
      (response: any) => {
        this.success = true
        this.message = response.message
      },
      () => {
        this.success = false
      }
    )
  }
}
