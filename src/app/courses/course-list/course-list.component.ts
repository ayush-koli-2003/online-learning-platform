import { Component, OnInit } from '@angular/core';
import { Course } from '../../interfaces/course';
import { CoursesService } from '../../services/courses.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-list',
  standalone: false,
  
  templateUrl: './course-list.component.html',
  styleUrl: './course-list.component.css'
})
export class CourseListComponent implements OnInit {
  courseList:Array<Course>;
  triggeredId=-1;
  constructor(private courseService:CoursesService,private router:Router){
    this.courseList= courseService.getAllCourses();
  }

  ngOnInit(): void {
    this.courseService.checkChangedList.subscribe(
      (data)=>{ this.courseList = data
      }
    );
  }

  courseDetail(id:number){
    this.router.navigate(['courses','courseinfo',id]);
  }

  doSubscribe(id:number){
    
    this.courseService.addToSubscribed(id)
  }

  removeSubscribe(id:number){
    
    this.courseService.removeFromSubscribed(id);

  }

}
