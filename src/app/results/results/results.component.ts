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
  type:any;
  search:any;
  searchField:string;

  constructor(private route: ActivatedRoute, private mainservice: MainService) {

    this.route.params.subscribe(params => {
      this.type = params.type;
      this.search = params.search;
    });
  }

  ngOnInit(): void {
    if(this.type === "2"){
      this.searchCourse(this.search);
    }else{
      this.getCourses(this.search);
    }
  }
  searchCourse(s: string) {
    console.log(s);
  //  this.router.navigate(['/results', this.name , '']);
    
        this.mainservice.search(s).subscribe(data => {
          console.log(data);
          this.courses = data;
        });
        
  }
  getCourses(s:string) {
    this.mainservice.getCourses().subscribe(res => {
      if (res) {
        this.courses = res.data.filter(c => c.category === s);
    //    this.courses.filter(c => c.category === this.category);
        //  this.courseLoaded = false;
      }
      console.log(this.courses);
    });
  }
}
