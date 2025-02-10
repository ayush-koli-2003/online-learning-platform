import { NgModule } from "@angular/core";
import { Routes,RouterModule } from "@angular/router";
import { HomepageComponent } from "./home/homepage/homepage.component";
import { CourseListComponent } from "./courses/course-list/course-list.component";
import { ProfileModule } from "./profile/profile.module";
import { ProfilePageComponent } from "./profile/profile-page/profile-page.component";
import { CourseRoutingModule } from "./courses/course-routing.module";
import { UsersessionModule } from "./usersession/usersession.module";
import { UserSessionRoutingModule } from "./usersession/usersession-routing.module";
const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomepageComponent},
  {path:'courses',loadChildren:()=> import ('./courses/courses.module').then(m=>m.CoursesModule)},
  {path:'profile',component:ProfilePageComponent},
  {path:'signin',loadChildren: ()=> import ("./usersession/usersession.module").then(m=>m.UsersessionModule)}
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule{}