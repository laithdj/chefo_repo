import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../shared/main.service';
import { Course, Instructor } from '../../shared/models/courses';
export class Search {
  name?: string;
  courseCategory?: string;
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private router: Router, private mainservice: MainService) { }
  courses: Course[] = new Array();
  instructors: Instructor[] = new Array();

  search: Search = new Search();
  name: string = '';
  courseLoaded = true;
  ngOnInit() {
    this.getFeatureCourse();
    this.getFeatureInstructor();
  }
  details() {
    this.router.navigate(['/details']);
  }
  getFeatureCourse() {
    this.mainservice.getCourses().subscribe(data => {
      if (data) {
        this.courses = data.Courses.splice(0, 4);
        this.courseLoaded = false;
      }
      console.log(this.courses);
    });
  }
  getFeatureInstructor() {
    this.mainservice.getInstructors().subscribe(data => {
      if (data) {
        this.instructors = data.Instructors;
        this.courseLoaded = false;
        console.log(data);

      }
    });
  }

  check(e: any){
    console.log(e);
  }
  searchCourse() {
    console.log(this.name);
    this.router.navigate(['/results', this.name , '']);
    /*
        this.mainservice.searchCourse(s).subscribe(data => {
          this.courses  =  data.Courses;
          console.log(this.courses);
        });
        */
  }

}
