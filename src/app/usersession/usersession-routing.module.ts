import { Routes,RouterModule } from "@angular/router";
import { UserSessionManagementComponent } from "./user-session-management/user-session-management.component";
import { NgModule } from "@angular/core";

const routes:Routes=[
    {path:'',component:UserSessionManagementComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class UserSessionRoutingModule{}