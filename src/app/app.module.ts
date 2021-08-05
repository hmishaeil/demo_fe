import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LandingComponent } from './components/landing/landing.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { MatchPasswordDirective } from './directives/match-password.directive';
import { SuccessfulRegisterComponent } from './components/successful-register/successful-register.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { SpinnerInterceptor } from './interceptors/spinner.interceptor';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { RequestResetPasswordComponent } from './components/request-reset-password/request-reset-password.component';
import { RequestResetPasswordSentComponent } from './components/request-reset-password-sent/request-reset-password-sent.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { HowItWorksModalComponent } from './components/how-it-works-modal/how-it-works-modal.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { TermsComponent } from './components/terms/terms.component';
import { CareersComponent } from './components/careers/careers.component';
import { OpenPositionsComponent } from './components/open-positions/open-positions.component';
import { PrivacyPolicyComponent } from './components/privacy-policy/privacy-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    LandingComponent,
    MatchPasswordDirective,
    SuccessfulRegisterComponent,
    VerifyEmailComponent,
    SpinnerComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    NavbarDashboardComponent,
    RequestResetPasswordComponent,
    RequestResetPasswordSentComponent,
    ResetPasswordComponent,
    HowItWorksModalComponent,
    HowItWorksComponent,
    AboutUsComponent,
    TermsComponent,
    CareersComponent,
    OpenPositionsComponent,
    PrivacyPolicyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    NgxSpinnerModule,
    ToastrModule.forRoot(
      {
        preventDuplicates: true,
        enableHtml: true,
        progressBar: true,
        // messageClass: "fw-bold",
        iconClasses: {
          error: 'text-danger bg-light border border-5 border-danger',
          info: 'text-info bg-light border border-5 border-info',
          success: 'text-success bg-light border border-5 border-success',
          warning: 'text-warning bg-light border border-5 border-warning',
        },
        toastClass: "toast-width"
      }
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
