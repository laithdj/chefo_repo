import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../shared/main.service';
import { Instructor } from '../../shared/models/courses';
import { Course } from '../../models/Course';
import { Category } from '../../models/Category';
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
  categories: Category[] = new Array();
  instructors: Instructor[] = new Array();
  search: Search = new Search();
  name: string = '';
  courseLoaded = true;
  
  ngOnInit() {
    this.getCategories();
  }
  details() {
    this.router.navigate(['/details']);
  }

  getCategories() {
    this.mainservice.getCategories().subscribe(data => {
      if (data) {
        this.categories = data;
        this.courseLoaded = false;
      }
      console.log(this.courses);
    });
  }
  createCourse() {
    /*
    let course:Course = new Course;
    course.name = 'laith';

    this.mainservice.createCourse(course).subscribe(data => {
      if (data) {

      }
    });
    */
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
