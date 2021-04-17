import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';
import { MainService } from 'src/app/services/services';

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
      console.log(c);
      this.mainservice.registerCourse(c).subscribe(data => {
          console.log(data);
        });
  }

}
