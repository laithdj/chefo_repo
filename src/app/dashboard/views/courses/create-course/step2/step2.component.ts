import { Component, OnInit } from '@angular/core';
import { VideoItems } from '../../../../../models/Video';
import { MainService } from '../../../../../shared/main.service';
import { Router } from '@angular/router';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  myFiles: string[] = [];      
  selectedFile: File = null;
  errorString = '';
  error = false;
  videos:VideoItems[] = new Array();
  progress: string;
  constructor(private mainService:MainService, private route: Router) { }

  ngOnInit() {
    this.videos[0] = new VideoItems();
    this.videos[0].type = "video/mp4";
  }
  addRow(){
    this.progress = '';
  //  this.videos[this.videos.length] = new VideoItems();
    let vid = new VideoItems();
    vid.type = "video/mp4";
    this.videos.push(vid);
    console.log(this.videos);
  }
  submit(){

    this.errorString = ''
    
    if(!this.selectedFile){
      this.errorString = this.errorString + ' ' + 'Please select a video';
     }
     if(this.selectedFile?.type !== 'video/mp4'){
      this.errorString = this.errorString + ' ' + 'Please select a video';
     }
    if(!this.videos[0].name){
     this.errorString = this.errorString + ' ' + 'Please add a name for the video.';
    }
    if((this.selectedFile)&&(!this.checkUploaded())){
     this.errorString = this.errorString + ' ' + 'Please wait for file to upload.';
    }

    if(this.errorString.length > 1){
      this.error = true;
    }else{
      this.mainService.course.courseVids = this.videos;
      this.route.navigate(['dashboard/courses/create-course/step-3']);
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
      this.progress = 'Uploaded';

    }
    return loaded;
  }
  getFileDetails(e:any , index:number) { 
    this.progress = 'Uploading...'     
    this.selectedFile = <File>e.target.files[0];
    console.log(this.selectedFile);
    let frmData = new FormData();
    frmData.append("productVideo", this.selectedFile, this.selectedFile?.name);
    this.mainService.uploadVideo(frmData).subscribe(response => {

      if (response) {

       this.videos[index].src = response.body?.videoUrl;

       if((this.selectedFile)&&(this.selectedFile.type === 'video/mp4')&&(this.checkUploaded())){
       }
      }
    });
    }
}
