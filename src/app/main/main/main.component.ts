import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../shared/main.service';
import { Course } from '../../models/Course';
import { Category } from '../../models/Category';
import { User } from '../../models/User';
import { AuthService } from '@auth0/auth0-angular';

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

  constructor(private router: Router, private mainservice: MainService, public auth: AuthService) { }
  courses: Course[] = new Array();
  categories: Category[] = new Array();
  search: Search = new Search();
  name: string = '';
  courseLoaded = true;
  searchField='';
  
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
  registerInstructor(){
    const element = new User();
    element.image = "";
    element.name = "Laith Ajail"
    element.revenue = 0;
    element.students = 0;
    this.mainservice.registerInstructor(element).subscribe(data => {
      if (data) {

      }
    });
  }

  searchCourse(s: string) {
    this.router.navigate(['/results/',2,s]);
  }

}
