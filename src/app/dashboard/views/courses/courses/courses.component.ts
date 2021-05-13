import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../shared/main.service';
import { Course } from '../../../../models/Course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent implements OnInit {

  constructor(private mainservice: MainService) { }
  courses: Course[] = new Array();

  ngOnInit(): void {
    this.getCourses()
  }
  getCourses() {
    this.mainservice.getCourses().subscribe(res => {
      if (res) {
       this.courses = res.data;
       this.courses = res.data.filter(c => c.instructorId === this.mainservice.user._id);

      }
    });
  }
}
