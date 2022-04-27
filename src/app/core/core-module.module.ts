import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/auth/login/login.component';
import { ResetComponent } from './components/auth/reset/reset.component';
import { ForgetComponent } from './components/auth/forget/forget.component';
import { ForgetPasswordVerificationComponent } from './components/auth/forget-password-verification/forget-password-verification.component';
import { AngularMaterialModule } from 'src/app/modules/angular-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    ForgetPasswordVerificationComponent
  ],
  imports: [
    CommonModule,
    AngularMaterialModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CoreModuleModule { }
