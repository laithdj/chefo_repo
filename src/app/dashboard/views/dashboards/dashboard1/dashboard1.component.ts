import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MainService } from '../../../../shared/main.service';
import { User } from '../../../../models/User';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-dashboard1',
  templateUrl: './dashboard1.component.html',
  styleUrls: ['./dashboard1.component.scss']
})
export class Dashboard1Component implements OnInit {

  public map: any = { lat: 51.678418, lng: 7.809007 };
  public chart1Type:string = 'bar';
  public chart2Type:string = 'pie';
  public chart3Type:string = 'line';
  public chart4Type:string = 'radar';
  public chart5Type:string = 'doughnut';
  user: User = new User();
  profile:any;

  public chartType = 'line';

  public chartDatasets: Array<any> = [
    {data: [50, 40, 60, 51, 56, 55, 40], label: '#1'},
    {data: [28, 80, 40, 69, 36, 37, 110], label: '#2'},
    {data: [38, 58, 30, 90, 45, 65, 30], label: '#3'}
  ];

  public chartLabels: Array<any> = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'];

  public chartColors:Array<any> = [

  ];

  public dateOptionsSelect: any[];
  public bulkOptionsSelect: any[];
  public showOnlyOptionsSelect: any[];
  public filterOptionsSelect: any[];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: '#5b5f62',
      }
    },
    scales: {
      yAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }],
      xAxes: [{
        ticks: {
          fontColor: '#5b5f62',
        }
      }]
    }
  };

  constructor(private router: ActivatedRoute,private mainService: MainService,public auth: AuthService) {
    this.auth.user$.subscribe(
      (profile) => {
        this.profile = profile;
        console.log(this.profile);
        this.validateUser(profile);
      //  this.createInstructor(profile);

      }
    );

  //  this.createInstructor(this.profile);
  }

  ngOnInit() {
    console.log(this.mainService.user);
  }
  validateUser(profile:any){
    this.mainService.searchTheInstructor(profile).subscribe(response => {
      if (response.length > 0) {
        this.mainService.user = response[0];
      }else{
        this.createInstructor(profile);
      }
    });
  }
  getInstructor(userId:number){
    
    this.mainService.getInstructor(userId).subscribe(response => {
      if (response) {
      //  this.user = response.InstructorDetails[0];
        this.mainService.user = response;
      console.log(this.mainService.user);
      }
    });
  }
  createInstructor(profile:any){
    let user = new User();
    user.userId = profile?.sub;
    user.image = profile?.image;
    user.name = profile?.name;
    
    this.mainService.registerInstructor(user).subscribe(response => {
      if (response) {
      //  this.user = response.InstructorDetails[0];
      console.log(response);
      }
    });
  }
}
