import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-request-reset-password-sent',
  templateUrl: './request-reset-password-sent.component.html',
  styleUrls: ['./request-reset-password-sent.component.css']
})
export class RequestResetPasswordSentComponent implements OnInit {

  message = ''
  success = false

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

}
