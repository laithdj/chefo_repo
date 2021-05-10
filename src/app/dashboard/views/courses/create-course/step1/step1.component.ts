import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../../shared/main.service';
import { Course } from '../../../../../models/Course';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  course: Course = new Course();
  errorString = '';
  error = false;
  constructor(private mainservice:MainService, private route: Router) { }

  ngOnInit(): void {
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
      this.mainservice.course = c;
      this.route.navigate(['dashboard/courses/create-course/step-2']);

     }
  }
}
