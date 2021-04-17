import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../../shared/main.service';
import { Course } from '../../../../../models/Course';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  course: Course = new Course();
  constructor(private mainservice:MainService) { }

  ngOnInit(): void {
  }
  submit(c:Course){
     // console.log(c);
      this.mainservice.course = c;
  }
}
