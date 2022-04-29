import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { FamilyModule } from './futures/family/family.module';
import { ForgetComponent } from './core/components/auth/forget/forget.component';
import { ForgetPasswordVerificationComponent } from './core/components/auth/forget-password-verification/forget-password-verification.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { ResetComponent } from './core/components/auth/reset/reset.component';
import { AddProfileInfoComponent } from './core/components/add-profile-info/add-profile-info.component';
import { ShareModule } from './share/share.module';
@NgModule({
  declarations: [
    AppComponent,
    ForgetComponent,
    ForgetPasswordVerificationComponent,
    LoginComponent,
    ResetComponent,
    AddProfileInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    FamilyModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
