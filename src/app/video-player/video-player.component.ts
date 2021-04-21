import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MainService } from '../shared/main.service';
import { Course } from '../models/Course';
export class Video{
  name: string;
  src: string;
  type: string;
}
@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit {
  videoItems:Video[] = new Array();
  course: Course = new Course();
  activeIndex = 0;
  currentVideo:Video = new Video();
  data;
  constructor(private route: ActivatedRoute, private mainservice: MainService) {
    
    this.route.params.subscribe(params => {
      let courseId = params.id;
      console.log(params.id);
      this.getCourse(courseId);
    });
    
   }

  ngOnInit(): void { }
  getCourse(course:any){
    this.mainservice.getItem(course).subscribe(data => {
      console.log(data.courseDetails[0]);
       if(data){
        this.course = data.courseDetails[0];
        this.videoItems = this.course.courseVids;
        this.currentVideo = this.videoItems[this.activeIndex];

        console.log(this.videoItems);
       }
    });
  }

  videoPlayerInit(data) {
    this.data = data;

    this.data.getDefaultMedia().subscriptions.loadedMetadata.subscribe(this.initVdo.bind(this));
    this.data.getDefaultMedia().subscriptions.ended.subscribe(this.nextVideo.bind(this));
  }

  nextVideo() {
    this.activeIndex++;

    if (this.activeIndex === this.videoItems.length) {
      this.activeIndex = 0;
    }

    this.currentVideo = this.videoItems[this.activeIndex];
  }

  initVdo() {
    this.data.play();
  }

  startPlaylistVdo(item, index: number) {
    this.activeIndex = index;
    this.currentVideo = item;
  }
}
