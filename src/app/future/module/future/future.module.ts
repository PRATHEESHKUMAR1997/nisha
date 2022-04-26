import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from '../../components/dashboard/dashboard.component';
import { UserListComponent } from '../../components/components/user-list/user-list.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UserListComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FutureModule { }
