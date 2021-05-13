import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MainService } from '../shared/main.service';
import { User } from '../models/User';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']

})

export class AppComponent implements OnInit {
  values: string[] = ['Tag 1', 'Tag 2', 'Tag 4'];
  user: User = new User();
  specialPage: boolean;

  private specialPages: any[] = [
    '/pages/login',
    '/pages/register',
    '/pages/lock',
    '/pages/pricing',
    '/pages/single-post',
    '/pages/post-listing'
  ];

  private currentUrl = '';

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private mainService: MainService
  ) {

    this.router.events.subscribe((route:any) => {
      this.currentUrl = route.url;

      this.specialPage = this.specialPages.indexOf(this.currentUrl) !== -1;
    });
    this.route.params.subscribe(params => {
      let userId = params.id;
    //  this.getInstructor(userId);
    });

  }

  ngOnInit(): void {
   // this.router.navigate(['dashboard/dashboard/609c8e3be4cb7447f4d8ff55']);

  }
  getInstructor(userId:number){
    this.mainService.getInstructor(userId).subscribe(response => {
      if (response) {
        this.user = response.InstructorDetails[0];
        this.mainService.user = response.InstructorDetails[0];
      }
    });
  }

  goBack(): void {
    this.location.back();
  }
}
