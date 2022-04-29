import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FamilyRoutingModule } from './family-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from 'src/app/modules/angular-material.module';
import { FamilyLayoutComponent } from './components/family-layout/family-layout.component';
import { ShareModule } from 'src/app/share/share.module';


@NgModule({
  declarations: [
    FamilyLayoutComponent
  ],
  imports: [
    CommonModule,
    FamilyRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ShareModule
  ]
})
export class FamilyModule { }
