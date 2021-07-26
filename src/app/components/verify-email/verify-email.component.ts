import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { EmailVerificationResponse } from 'src/app/responses/email-verification-response.model';
import { AuthService } from 'src/app/services/auth.service';
import { ComponentsStateService } from 'src/app/services/components-state.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent implements OnInit {

  success: boolean = false;
  response: EmailVerificationResponse = new EmailVerificationResponse("");
  message: string = ""

  constructor(private authService: AuthService, 
    private route: ActivatedRoute, 
    private componentStateService: ComponentsStateService,
    private router: Router) { }

  ngOnInit(): void {
    const uuid = this.route.snapshot.params.uuid;

    this.authService.verifyEmail(uuid).subscribe(
      (response) => {
        this.success = true;
        this.message = response.message;
      },
      () => {
        this.success = false;
        this.message = "Please try again later and in case of recurring the issue, please contact Support Team for further assistance."
      }

    )
  }

}
