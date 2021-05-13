import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Search } from '../../main/main/main.component';
import { MainService } from '../../shared/main.service';
import { Course } from '../../models/Course';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  s: Search = new Search;
  courses: Course[] = new Array();
  category: string;

  constructor(private route: ActivatedRoute, private mainservice: MainService) {

    this.route.params.subscribe(params => {
      this.category = params.category;
    });
  }

  ngOnInit(): void {
    this.getCourses();
  }
  searchCourse(s: Search) {
    this.mainservice.searchCourse(s).subscribe(data => {
      this.courses = data.Courses;
      console.log(this.courses);
    });
  }
  getCourses() {
    this.mainservice.getCourses().subscribe(res => {
      if (res) {
        this.courses = res.data.filter(c => c.category === this.category);;
    //    this.courses.filter(c => c.category === this.category);
        //  this.courseLoaded = false;
      }
      console.log(this.courses);
    });
  }
}
