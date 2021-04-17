import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../../shared/main.service';
import { Course } from '../../../../../models/Course';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  course:Course = new Course();
  constructor(private mainService:MainService) { }

  ngOnInit(): void {
    this.course = this.mainService.course;
  }
  submit(){
    console.log(this.mainService.course);
  }

}
