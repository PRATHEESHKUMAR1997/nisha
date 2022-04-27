import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './modules/angular-material.module';
import { LayoutModule } from '@angular/cdk/layout';
import { CoreModuleModule } from './core/modules/core-module/core-module.module';
import { LayoutComponent } from './futurs/layout/layout.component';
import { FutureModule } from './futurs/module/future.module';
import { SideNavigationComponent } from './futurs/side-navigation/side-navigation.component';
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
