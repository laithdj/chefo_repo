import { Component, OnInit, Input} from '@angular/core';
import { MainService } from '../../../../../shared/main.service';
import { User } from '../../../../../models/User';

@Component({
  selector: 'app-stats-card',
  templateUrl: './stats-card.component.html',
  styleUrls: ['./stats-card.component.scss']
})
export class StatsCardComponent implements OnInit {
  // user:User = new User();
  coursesCount = 0;
  private _user: User;

  @Input() set user(user: User) {
    this._user = user;
  }
  get user(): User {
    return this._user;
  }
  constructor(private mainservice: MainService) { }

  ngOnInit() {
    this.getCourses();
    console.log(this.mainservice.user);
  }
  getCourses() {
    this.mainservice.getCourses().subscribe(res => {
      if (res) {
       const count = res.data.filter(c => c.instructorId === this.user?.userId);
       //this.coursesCount = count.length;
        console.log(count);
      }
    });
  }

}
