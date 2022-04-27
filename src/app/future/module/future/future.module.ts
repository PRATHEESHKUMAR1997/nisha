import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserListComponent } from '../../components/components/user-list/user-list.component';
import { SideNavigationComponent } from '../../side-navigation/side-navigation.component';
import { TopBarComponent } from '../../top-bar/top-bar.component';
import { AngularMaterialModule } from 'src/app/modules/material/angular-material/angular-material.module';



@NgModule({
  declarations: [
    DashboardComponent,
    UserListComponent,
    TopBarComponent  
  ],
  imports: [
    CommonModule,
    AngularMaterialModule
  ]
})
export class FutureModule { }
