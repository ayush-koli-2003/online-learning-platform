import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-course-info',
  standalone: false,
  
  templateUrl: './course-info.component.html',
  styleUrl: './course-info.component.css'
})
export class CourseInfoComponent implements OnInit {
    id:number;
    constructor(private activatedRoute: ActivatedRoute){
      this.id=-1;
    }

    ngOnInit(): void {
      this.activatedRoute.paramMap.subscribe(
        (params)=> this.id = parseInt(params.get('id') as string)
      )
    }
}
