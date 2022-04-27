import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavigationComponent } from '../side-navigation/side-navigation.component';
import { TopBarComponent } from '../top-bar/top-bar.component';
import { AngularMaterialModule } from 'src/app/modules/angular-material.module';



@NgModule({
  declarations: [
    TopBarComponent  
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class FutureModule { }
