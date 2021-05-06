import { Component, OnInit } from '@angular/core';
import { VideoItems } from '../../../../../models/Video';
import { MainService } from '../../../../../shared/main.service';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {
  myFiles: string[] = [];      

  videos:VideoItems[] = new Array();
  constructor(private mainServce:MainService) { }

  ngOnInit() {
    this.videos[0] = new VideoItems();
  }
  addRow(){
  //  this.videos[this.videos.length] = new VideoItems();
    this.videos.push(new VideoItems());
    console.log(this.videos);
  }
  submit(){
    this.mainServce.course.courseVids = this.videos;
    console.log(this.mainServce.course);
  }
  getFileDetails(e) {      
    //console.log (e.target.files);      
    for (var i = 0; i < e.target.files.length; i++) {      
      this.myFiles.push(e.target.files[i]);      
    } 
    console.log(this.myFiles);     
  }
  uploadFiles() {      
    const frmData = new FormData();      
    for (var i = 0; i < this.myFiles.length; i++) {      
      frmData.append("fileUpload", this.myFiles[i]);      
    }      
   console.log(frmData);
  } 

}
