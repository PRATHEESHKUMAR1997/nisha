import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/auth/login/login.component';
import { ForgetComponent } from './core/components/auth/forget/forget.component';
import { ForgetPasswordVerificationComponent } from './core/components/auth/forget-password-verification/forget-password-verification.component';
import { ResetComponent } from './core/components/auth/reset/reset.component';
import { LayoutComponent } from './futurs/layout/layout.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'forget-password', component: ForgetComponent},
  {path: 'otp-verification', component: ForgetPasswordVerificationComponent},
  {path: 'reset-password', component: ResetComponent},
  {path: 'app', component: LayoutComponent, children: [  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
