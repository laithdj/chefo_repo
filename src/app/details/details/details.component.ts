import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from 'src/app/shared/main.service';
import { Course } from 'src/app/shared/models/courses';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  course: Course = new Course();
  constructor(private route: ActivatedRoute, private mainservice: MainService) {
    this.route.params.subscribe(params => {
      let courseId = params.id;
      console.log(params.id);
      this.getCourse(courseId);
    });
   }

  ngOnInit() {
  }
  getCourse(course:any){
    this.mainservice.getCourse(course).subscribe(data => {
    //  this.courses  =  data.Courses;
      console.log(data);
       // console.log(this.products);Array<object>
       if(data.courseDetails.length > 0){
        this.course = data.courseDetails[0];
        console.log(this.course)
       }
    });
  }

}
