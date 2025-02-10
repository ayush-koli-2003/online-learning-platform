import { NgModule } from "@angular/core";
import { Routes,RouterModule, Router } from "@angular/router";
import { CourseListComponent } from "./course-list/course-list.component";
import { CourseInfoComponent } from "./course-info/course-info.component";
import { CommonModule } from "@angular/common";

const routes:Routes=[
    {path:'',component:CourseListComponent},
    {path:'courseinfo/:id',component:CourseInfoComponent}
]

@NgModule({
    imports:[RouterModule.forChild(routes),CommonModule],
    exports:[RouterModule]
})

export class CourseRoutingModule{}