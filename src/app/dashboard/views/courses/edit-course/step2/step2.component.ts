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
  loading: boolean;
  myFiles: string[] = [];      
  selectedFile: File = null;
  errorString = '';
  progressNo: number;
  submitted = false;
  error = false;
  videos:VideoItems[] = new Array();
  progress: string;
  constructor(private mainService:MainService, private route: Router) { }

  ngOnInit() {
    if (this.mainService.course.courseVids?.length > 0) {
      this.videos = this.mainService.course.courseVids;
      this.uploadedVids = this.mainService.uploadedVids;
      if(!this.uploadedVids[0]) {

        this.uploadedVids[0] = new vidArray();
        this.uploadedVids[0].array = new Array();
      }
    } else {
      this.videos[0] = new VideoItems();
      this.videos[0].type = "video/mp4";
      this.uploadedVids[0] = new vidArray();
      this.uploadedVids[0].array = new Array();

    }
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
    this.submitted = true;
    this.errorString = ''
    let index = 0;
    let flag = 0;
    let count = 0;
    this.videos.forEach(element => {
      if (!element.name) {
        this.errorString = this.errorString + ' ' + 'Please add a name for the video for item. ';
      }
      if(!element.src){
        count++;
      }
      index++;
    });
    if (this.uploadedVids[0].array?.length < count) {
      this.errorString = this.errorString + ' ' + 'Please add a video file for item ';
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
      //disable button
      let index = 0
      this.loading = true;
      let frmData = new FormData();

      this.uploadedVids[0].array.forEach(element => {
        this.selectedFile = <File>element[0];
        frmData.append("productVideo", this.selectedFile, this.selectedFile?.name);
      });
      this.mainService.uploadVideo(frmData).subscribe(response => {
        console.log(response);
        if(response['loaded'] && response['total']){
          this.progressNo = Math.round(event['loaded'] / event['total'] * 100);
        }
        if (response?.body?.videoUrl) {
          if(count === response?.body?.videoUrl.length){
            this.videos.forEach(element => {
              element.src = response.body?.videoUrl[index].location;
              index++;
            });
          }
          if(count === index){
            //disable button
            this.mainService.course.courseVids = this.videos;
            this.mainService.uploadedVids = this.uploadedVids;
            this.route.navigate(['dashboard/courses/edit-course/step-3']);
          }
        }
      });
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
    this.mainService.vidChange = true;
    }

}
