import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ContactUsRequest } from 'src/app/requests/contact-us-request.model';
import { ContactUsService } from 'src/app/services/contact-us.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactUsRequest: ContactUsRequest = new ContactUsRequest();
  options: string[];

  constructor(private contactUsService: ContactUsService, private toaster: ToastrService, private router: Router) {
    this.options = [
      'General',
      'Suggestion',
      'Feedback',
      'Technical',
      'Question',
    ];
    this.contactUsRequest.type = this.options[0];
  }

  ngOnInit(): void {

  }

  onSubmit() {
    this.contactUsService.submitContactUsMessage(this.contactUsRequest).subscribe(
      () => 
       { 
         this.toaster.success("Your message submitted successfully!");
         this.router.navigateByUrl("/")
       }
    );
  }

  optionChosen(option: string) {
    this.contactUsRequest.type = option
  }
}
