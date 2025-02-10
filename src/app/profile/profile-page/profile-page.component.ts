import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../../interfaces/course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: false,
  
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent implements OnInit {
  subscribedList:Array<Course>;
  constructor(private courseService:CoursesService,private router:Router){
    this.subscribedList=new Array();
  }

  ngOnInit(){
    this.subscribedList= this.courseService.getAllSubscribedCourses();
  }

  courseDetail(id:number){
    let url = './courseinfo/'+id;
    this.router.navigate([url]);
  }
}
