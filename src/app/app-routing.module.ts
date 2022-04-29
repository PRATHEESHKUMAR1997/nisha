import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/components/auth/login/login.component';
import { ForgetComponent } from './core/components/auth/forget/forget.component';
import { ForgetPasswordVerificationComponent } from './core/components/auth/forget-password-verification/forget-password-verification.component';
import { ResetComponent } from './core/components/auth/reset/reset.component';
import { FamilyLayoutComponent } from './futures/family/components/family-layout/family-layout.component';
import { AddProfileInfoComponent } from './core/components/add-profile-info/add-profile-info.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'forget-password', component: ForgetComponent},
  {path: 'otp-verification', component: ForgetPasswordVerificationComponent},
  {path: 'reset-password', component: ResetComponent},
  {path: 'app', component: FamilyLayoutComponent, children: [
    {path: 'profile-add', component: AddProfileInfoComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
