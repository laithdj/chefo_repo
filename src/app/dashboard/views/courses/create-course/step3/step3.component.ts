import { Component, OnInit, Renderer2 } from '@angular/core';
import { Course } from '../../../../../models/Course';
import { MainService } from '../../../../../shared/main.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  course:Course = new Course();
  myFiles: string[] = [];      
  selectedFile: File = null;
  selectedFileUrl = '';
  errorString = '';
  error = false;
  progress = '';
  constructor(private mainService:MainService,private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.course = this.mainService.course;
    console.log(this.course);
  }

  getFileDetails(e) {
    this.progress = 'Uploading...';      
    this.selectedFile = <File>e.target.files[0];
    let frmData = new FormData();
    frmData.append("productImage", this.selectedFile, this.selectedFile?.name);
    this.mainService.upload(frmData).subscribe(response => {
      if (response) {
        this.mainService.course.image = response.imageUrl;
      }
    });  
    }
  
  uploadFiles() {
    this.errorString = ''
    let type = 0;
    if(!this.selectedFile){
      this.errorString = this.errorString + ' ' + 'Please select a image';
     }
     if((this.selectedFile.type !== 'image/jpeg') && (this.selectedFile.type !== 'image/png')){
      this.errorString = this.errorString + ' ' + 'Please select a image file';
     }
     if((this.selectedFile.type === 'image/jpeg') || (this.selectedFile.type === 'image/png')){
      type = 1;
     }
     
     if((this.selectedFile)&&(type === 1)&&(!this.mainService.course.image)){
     this.errorString = this.errorString + ' ' + 'Please wait until image is uploaded';
    }
    if((this.selectedFile)&&(type === 1)&&(this.mainService.course.image)){
      this.progress = 'Uploaded';
     }
    if(this.errorString.length > 1){
      this.error = true;
    }else{
      this.mainService.createCourse(this.mainService.course).subscribe(response => {
        if(response){
          this.route.navigate(['dashboard/courses']);
        }
      });
    }
  }
}
