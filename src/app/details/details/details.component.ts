import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MainService } from '../../shared/main.service';
import { Course } from '../../models/Course';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  course: Course = new Course();
  username: string;
  starVal: number;
  constructor(private route: ActivatedRoute, private mainservice: MainService, public auth: AuthService, private router: Router) {
    this.route.params.subscribe(params => {
      let courseId = params.id;
      console.log(params.id);
      this.getCourse(courseId);
    });
    this.auth.user$.subscribe(data => {
      console.log(data.nickname);
      this.username = data.nickname;
    });
   }

  ngOnInit() {
  }
  getCourse(course:any){
    this.mainservice.getItem(course).subscribe(data => {
    //  this.courses  =  data.Courses;
      console.log(data);
       // console.log(this.products);Array<object>
       if(data){
        this.course = data.courseDetails[0];
        console.log(this.course)
       }
    });
  }
  review(){

  }
  star(value: number){
    this.starVal = value;
  }
  enrol(id:any){
    this.auth.isAuthenticated$.subscribe(data => {
      console.log(data);
      if(data){
        this.router.navigate(['../../video-player/' , id]);
      }else{
        this.auth.loginWithRedirect();
      }
    });

  //  this.router.navigate(['../../video-player/' , id]);
/*
    if(this.auth.isAuthenticated$){
      this.auth.user$.subscribe(
        (profile) => {
          console.log(profile);
          this.mainservice.searchTheInstructor(profile).subscribe(data => {
              console.log(data);
              if(data[0].video_count < data[0].membership_count){
                this.mainservice.updateVideoCount(data[0]._id, data[0].video_count + 1).subscribe(data => {
                  this.router.navigate(['../../video-player/' , id]);
                });
              }
            });
        }
      );
    }*/
  }
}
