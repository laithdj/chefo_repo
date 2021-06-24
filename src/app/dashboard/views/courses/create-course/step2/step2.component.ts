import { Component, OnInit } from '@angular/core';
import { VideoItems } from '../../../../../models/Video';
import { MainService } from '../../../../../shared/main.service';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';
export class vidArray {
  array: any
}
@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})

export class Step2Component implements OnInit {
  uploadedVids: vidArray[] = new Array();
  myFiles: string[] = [];
  selectedFile: File = null;
  errorString = '';
  error = false;
  uploadedFiles: Array<File> = [];
  videos: VideoItems[] = new Array();
  progress: string;
  constructor(private mainService: MainService, private route: Router) { }

  ngOnInit() {
    if (this.mainService.course.courseVids?.length > 0) {
      this.videos = this.mainService.course.courseVids;
      this.uploadedVids = this.mainService.uploadedVids;
    } else {
      this.videos[0] = new VideoItems();
      this.videos[0].type = "video/mp4";
      this.uploadedVids[0] = new vidArray();
      this.uploadedVids[0].array = new Array();

    }

  }
  addRow() {
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
      this.route.navigate(['dashboard/courses/create-course/step-3']);
    }
  }
  back() {
    this.route.navigate(['dashboard/courses/create-course']);
  }
  checkUploaded(): boolean {
    let loaded = false;
    let count = 0;
    this.videos.forEach(element => {
      if (element.src) {
        count++;

      }
    });
    if (count === this.videos.length) {
      loaded = true;
      this.progress = 'Uploaded';

    }
    return loaded;
  }
  getFileDetails(e: any, index: number) {
    console.log(e);
    console.log(this.uploadedVids);

    //  this.progress = 'Uploading...'
    /*
        this.selectedFile = <File>this.uploadedVids[this.uploadedVids?.length - 1][0];
        console.log(this.selectedFile);
        let frmData = new FormData();
        frmData.append("productVideo", this.selectedFile, this.selectedFile?.name);
        
        this.mainService.uploadVideo(frmData).subscribe(response => {
    
          if (response) {
    
           this.videos[index].src = response.body?.videoUrl;
    
           if((this.selectedFile)&&(this.selectedFile.type === 'video/mp4')&&(this.checkUploaded())){
           }
          }
        });*/
  }
}
