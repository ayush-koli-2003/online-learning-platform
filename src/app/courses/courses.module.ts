import { NgModule } from "@angular/core";
import { CourseListComponent } from './course-list/course-list.component';
import { CourseInfoComponent } from './course-info/course-info.component';
import { CourseRoutingModule } from "./course-routing.module";
import { CommonModule } from "@angular/common";
import { RouterOutlet } from "@angular/router";

@NgModule({
    declarations:[
    CourseListComponent,
    CourseInfoComponent
  ],
    imports:[
      RouterOutlet,
        CourseRoutingModule,
        CommonModule
    ],
    exports:[],
    providers:[]
})

export class CoursesModule{
    
}