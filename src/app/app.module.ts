import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/material/angular-material/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { LayoutComponent } from './future/layout/layout.component';
import { CoreModuleModule } from './core/modules/core-module/core-module.module';
import { FutureModule } from './future/module/future/future.module';
import { SideNavigationComponent } from './future/side-navigation/side-navigation.component';
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    LayoutModule,
    CoreModuleModule,
    FutureModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
