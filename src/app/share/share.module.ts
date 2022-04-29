import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from '../modules/angular-material.module';


@NgModule({
  declarations: [
    AppLayoutComponent
  ],
  exports:[
    AppLayoutComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ]
})
export class ShareModule { }
