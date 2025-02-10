import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSessionRoutingModule } from './usersession-routing.module';
import { UserSessionManagementComponent } from './user-session-management/user-session-management.component';



@NgModule({
  declarations: [UserSessionManagementComponent],
  imports: [
    CommonModule,
    UserSessionRoutingModule
  ]
})
export class UsersessionModule {
  constructor(){
    console.log("Init");7
    
  }
}
