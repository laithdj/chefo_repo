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
  selectedFile: File = null;

  videos:VideoItems[] = new Array();
  constructor(private mainService:MainService) { }

  ngOnInit() {
    this.videos[0] = new VideoItems();
    this.videos[0].type = "video/mp4";
  }
  addRow(){
  //  this.videos[this.videos.length] = new VideoItems();
    let vid = new VideoItems();
    vid.type = "video/mp4";
    this.videos.push(vid);
    console.log(this.videos);
  }
  submit(){
    this.mainService.course.courseVids = this.videos;
    console.log(this.mainService.course);
  }
  getFileDetails(e:any , index:number) {      
    this.selectedFile = <File>e.target.files[0];
    let frmData = new FormData();
    frmData.append("productVideo", this.selectedFile, this.selectedFile?.name);
    this.mainService.uploadVideo(frmData).subscribe(response => {
      if (response) {
        this.videos[index].src = response.data.productImage?.substring(7);
      }
    });  
    }
}
