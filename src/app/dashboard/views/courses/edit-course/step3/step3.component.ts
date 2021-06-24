import { Component, OnInit } from '@angular/core';
import { MainService } from '../../../../../shared/main.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Course } from '../../../../../models/Course';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class EditStep3Component implements OnInit {

  course:Course = new Course();
  myFiles: string[] = [];      
  selectedFile: File = null;
  selectedFileUrl = '';
  errorString = '';
  error = false;
  progress: string;
  loading: boolean;
  progressNo: number;
  constructor(private mainService:MainService,private http: HttpClient,private route:Router) { }

  ngOnInit(): void {
    this.course = this.mainService.course;
  }
  submit(){
    console.log(this.mainService.course);
    this.mainService.createCourse(this.mainService.course);
  }
  getFileDetails(e) {      
    this.progress = 'Uploading...';
    this.course.image = null;      
    this.selectedFile = <File>e.target.files[0];
    let frmData = new FormData();
    frmData.append("productImage", this.selectedFile, this.selectedFile?.name);
    this.mainService.upload(frmData).subscribe(response => {
      if (response) {
        this.mainService.course.image = response.imageUrl;
      }
    });   
    }
    back() {
      this.route.navigate(['dashboard/courses/create-course/step-2']);
    }
  uploadFiles() {
    this.errorString = ''
    let type = 0;
    if(!this.course.image){
      if (!this.selectedFile) {
        this.errorString = this.errorString + ' ' + 'Please select a image';
      } else{
        if ((this.selectedFile?.type !== 'image/jpeg') && (this.selectedFile?.type !== 'image/png')) {
          this.errorString = this.errorString + ' ' + 'Please select a image file';
        }
        if ((this.selectedFile?.type === 'image/jpeg') || (this.selectedFile?.type === 'image/png')) {
          type = 1;
        }
    
        if ((this.selectedFile) && (type === 1) && (!this.mainService.course.image)) {
          this.errorString = this.errorString + ' ' + 'Please wait until image is uploaded';
        }
        if ((this.selectedFile) && (type === 1) && (this.mainService.course.image)) {
          this.progress = 'Uploaded';
        }
      }
    }



    if (this.errorString.length > 1) {
      this.error = true;
    } else {
      let index = 0
      this.loading = true;
      let frmData = new FormData();

      this.mainService.uploadedVids[0].array.forEach(element => {
        this.selectedFile = <File>element[0];
        console.log(this.selectedFile);
        frmData.append("productVideo", this.selectedFile, this.selectedFile?.name);

        console.log(this.mainService.course.courseVids);
      });
      this.mainService.uploadVideo(frmData).subscribe(response => {
        console.log(response);
        if(response['loaded'] && response['total']){
          this.progressNo = Math.round(event['loaded'] / event['total'] * 100);
          console.log(this.progressNo);
        }
        if (response?.body?.videoUrl) {
          if(this.mainService.course.courseVids.length === response?.body?.videoUrl.length){
            this.mainService.course.courseVids.forEach(element => {
              element.src = response.body?.videoUrl[index].location;
              index++;
            });
          }
          if(this.mainService.course.courseVids.length === index){
            this.mainService.createCourse(this.mainService.course).subscribe(response => {
              if(response){
                this.route.navigate(['dashboard/courses']);
              }
            });
          }
        }
      });
    }
    console.log(this.mainService.course);
  }

}
