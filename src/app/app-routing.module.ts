import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { CareersComponent } from './components/careers/careers.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestResetPasswordComponent } from './components/request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { TermsComponent } from './components/terms/terms.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

const routes: Routes = [
  { path: '', component: CareersComponent },
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'verify-email/:uuid', component: VerifyEmailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'request-reset-password', component: RequestResetPasswordComponent },
  { path: 'reset-password/:uuid', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'how-it-works', component: HowItWorksComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'terms', component: TermsComponent },
  { path: '**', component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {
}
