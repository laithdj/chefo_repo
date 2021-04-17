import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Search } from 'src/app/main/main/main.component';
import { MainService } from 'src/app/shared/main.service';
import { Course } from 'src/app/shared/models/courses';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  s: Search = new Search;
  courses: Course[] = new Array();

  constructor(private route: ActivatedRoute, private mainservice: MainService) {
    this.route.params.subscribe(params => {
      this.s.name = params.name;
      this.s.courseCategory = params.category;
      console.log(params);
      this.searchCourse(this.s);
    });
   }

  ngOnInit(): void {
  }
  searchCourse(s: Search) {
        this.mainservice.searchCourse(s).subscribe(data => {
          this.courses  =  data.Courses;
          console.log(this.courses);
        });
  }

}
