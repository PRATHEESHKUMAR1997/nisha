import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './core/components/auth/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/material/angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { ForgetComponent } from './core/components/auth/forget/forget.component';
import { ResetComponent } from './core/components/auth/reset/reset.component';
import { LayoutComponent } from './core/dashboard/layout/layout.component';
import { SideNavigationComponent } from './core/dashboard/side-navigation/side-navigation.component';
import { ForgetPasswordVerificationComponent } from './core/components/auth/forget-password-verification/forget-password-verification.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    ResetComponent,
    LayoutComponent,
    SideNavigationComponent,
    ForgetPasswordVerificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
