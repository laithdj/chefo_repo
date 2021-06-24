import { Component, OnInit } from '@angular/core';
import { VideoItems } from '../../../../../models/Video';
import { MainService } from '../../../../../shared/main.service';
import { Router } from '@angular/router';
import { Course } from '../../../../../models/Course';
import { vidArray } from '../../create-course/step2/step2.component';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class EditStep2Component implements OnInit {
  course: Course = new Course();
  uploadedVids: vidArray[] = new Array();

  myFiles: string[] = [];      
  selectedFile: File = null;
  errorString = '';
  error = false;
  videos:VideoItems[] = new Array();
  progress: string;
  constructor(private mainService:MainService, private route: Router) { }

  ngOnInit() {
    this.videos = this.mainService.course.courseVids;
    this.uploadedVids = this.mainService.uploadedVids;
    if(this.uploadedVids.length < 1){
      this.uploadedVids[0] = new vidArray();
      this.uploadedVids[0].array = new Array();
    }
    console.log(this.mainService.uploadedVids);
  }
  back(){
    this.route.navigate(['dashboard/courses/create-course']);
  }
  addRow(){


    this.progress = '';
    //  this.videos[this.videos.length] = new VideoItems();
      let vid = new VideoItems();
      let uv = new vidArray();
      uv.array = new Array();
      vid.type = "video/mp4";
      this.videos.push(vid);
      this.uploadedVids.push(uv);
      console.log(this.videos);
  }
  submit() {
    this.errorString = ''
    let index = 0;
    let flag = 0;
    console.log(this.uploadedVids[0].array);
    console.log(this.uploadedVids[0].array);

    this.videos.forEach(element => {
      if (!element.name) {
        this.errorString = this.errorString + ' ' + 'Please add a name for the video for item. ';
      }
      index++;
    });
    if (this.uploadedVids[0].array?.length < this.videos?.length) {

      //  let i = 0;
      //  this.uploadedVids[0].array.forEach(element => {
      //    if(!element[0].size){
      this.errorString = this.errorString + ' ' + 'Please add a video file for item ';
      //    }
      // });
    } else {
      let i = 0;
      this.uploadedVids[0].array.forEach(element => {
        if (element.length < 1) {
          flag = 1
        }
      });
    }
    if(flag === 1){
      this.errorString = this.errorString + ' ' + 'Please add a video file for item ';

    }
    if (this.errorString.length > 1) {
      this.error = true;
    } else {
      this.mainService.course.courseVids = this.videos;
      this.mainService.uploadedVids = this.uploadedVids;
      this.route.navigate(['dashboard/courses/edit-course/step-3']);
    }
  }
  checkUploaded(): boolean{
    let loaded = false;
    let count = 0;
    this.videos.forEach(element => {
      if(element.src){
        count++;
      }
    });
    if(count === this.videos.length){
      loaded = true;
    }
    return loaded;
  }
  getFileDetails(e:any , index:number) { 

    }

}
