import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ContactUsRequest } from '../requests/contact-us-request.model';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  private API_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  submitContactUsMessage(contactUsRequest: ContactUsRequest){
    return this.http.post(this.API_URL + "/contact-us", contactUsRequest);
  }
}
