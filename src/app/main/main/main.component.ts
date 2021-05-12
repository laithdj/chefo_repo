import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../shared/main.service';
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
  search: Search = new Search();
  name: string = '';
  courseLoaded = true;
  
  ngOnInit() {
    this.getCategories();
  }
  details() {
    this.router.navigate(['/details']);
  }
  registerCategory(){
    const element = new Category();
    element.image = "http://www.chefo.co/assets/fitness.jpg";
    element.name = "Fitness" 
    this.mainservice.registerCategory(element).subscribe(data => {
      if (data) {
      }
    });

  }
  getCategories() {
    this.mainservice.getCategories().subscribe(response => {
      if (response.data) {
        console.log(response.data);
        this.categories = response.data;
        this.courseLoaded = false;
      }
    });
  }
  createCourse() {
    /*
    let course = [
      {
      }
    ]
    course.forEach(element => {
      this.mainservice.createCourse(element).subscribe(data => {
        if (data) {
  
        }
      });
    });    */
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
