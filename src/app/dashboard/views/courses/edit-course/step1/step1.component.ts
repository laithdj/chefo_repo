import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { MainService } from '../../../../../shared/main.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class EditStep1Component implements OnInit {
  course: Course = new Course();
  errorString = '';
  error = false;
  constructor(private mainservice:MainService, private route: Router, private router: ActivatedRoute) {
    this.router.params.subscribe(params => {
      let courseId = params.id;
      console.log(params.id);
      this.getCourse(courseId);
    });
   }

  ngOnInit(): void {
  }
  getCourse(course:any){
    this.mainservice.getItem(course).subscribe(data => {
       if(data){
        this.mainservice.course = data.courseDetails[0];
        this.course = data.courseDetails[0];

       }
    });
  }
  submit(c:Course){
    this.errorString = ''
     if(!c.name){
      this.errorString = this.errorString + ' ' + 'Please add a course name.';
     }
     if(!c.price){
      this.errorString = this.errorString + ' ' + 'Please add a price for the course.';
     }
     if(!c.description){
      this.errorString = this.errorString + ' ' + 'Please add a description for the course.';
     }
     if(this.errorString.length > 1){
       this.error = true;
     }else{
    // this.mainservice.course = c;
      this.route.navigate(['dashboard/courses/edit-course/step-2']);
     }
  }

}
