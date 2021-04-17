import { Component, OnInit } from '@angular/core';
import { VideoItems } from '../../../../../models/Video';
import { MainService } from '../../../../../shared/main.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  videos:VideoItems[] = new Array();
  constructor(private mainServce:MainService) { }

  ngOnInit(): void {
    
    this.videos.push(new VideoItems());
  }
  addRow(){
  //  this.videos[this.videos.length] = new VideoItems();
    this.videos.push(new VideoItems());
  }
  submit(){
    this.mainServce.course.courseVids = this.videos;
    console.log(this.mainServce.course);
  }

}
