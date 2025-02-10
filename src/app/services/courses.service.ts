import { Injectable } from '@angular/core';
import { Course } from '../interfaces/course';
import { BehaviorSubject, Subject,  } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courseList:Array<Course>=[];
  subscribedList:Array<Course>=[];
  subject:BehaviorSubject<Array<Course>> = new BehaviorSubject(this.courseList);
  checkChangedList = this.subject.asObservable();
  constructor() {
    this.courseList = new Array();
    this.subscribedList=new Array();
    this.courseList = [{courseId:1,courseName:"Learn ethical hacking",courseLastUpdated:new Date(2020,0,30,10,0,0),courseCategory:"Cyber security",courseInstructor:"Mosh",subscribtionStatus:false},{courseId:2,courseName:"Animation Tips 101",courseLastUpdated:new Date(2024,6,16,9,30,0),courseCategory:"Animation",courseInstructor:"Abhi Capez",subscribtionStatus:false}]
    // console.log(this.courseList);
    
    this.subject.next(this.courseList)
  }

  getAllCourses(){
    
    
    return this.courseList;
  }

  getCourseById(id:number){
    let c = this.courseList.filter((x)=>x.courseId===id);
    return c[0];
  }

  addToSubscribed(id:number){
    for(let i=0;i<this.courseList.length;i++){
      if(this.courseList[i].courseId===id){
        this.courseList[i].subscribtionStatus=true;        
        break;
      }
    }
    this.subscribedList= this.courseList.filter(x=>x.subscribtionStatus==true);
    this.subject.next(this.courseList)
  }

  getAllSubscribedCourses(){
    return this.courseList.filter(x=>x.subscribtionStatus==true)
  }

  removeFromSubscribed(id:number){
    
    for(let i=0;i<this.courseList.length;i++){
      if(this.courseList[i].courseId===id){
        this.courseList[i].subscribtionStatus=false;        
        break;
      }
    }
    this.subscribedList= this.courseList.filter(x=>x.subscribtionStatus==true);
    this.subject.next(this.courseList);
    
  }
}
