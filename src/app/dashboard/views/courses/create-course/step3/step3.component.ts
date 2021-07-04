import { Component, OnInit, Renderer2, OnDestroy } from '@angular/core';
import { Course } from '../../../../../models/Course';
import { MainService } from '../../../../../shared/main.service';
import { HttpClient } from '@angular/common/http';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit , OnDestroy{
  course: Course = new Course();
  myFiles: string[] = [];
  selectedFile: File = null;
  selectedFileUrl = '';
  errorString = '';
  error = false;
  progress = '';
  progressNo:any;
  loading = false;
  submitted = false;
  constructor(private mainService: MainService, private http: HttpClient, private route: Router) { }

  ngOnInit(): void {
    this.course = this.mainService.course;
    console.log(this.course);
  }
  ngOnDestroy(){
    if(this.submitted){
      console.log('submitted');
    }else{
      console.log('no');
      this.mainService.course.courseVids.forEach(element => {        
        this.mainService.deleteAWS(element.src.substr(46)).subscribe(response => {
          if(response){
          }
        });
      });
    }
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
  back() {
    this.route.navigate(['dashboard/courses/create-course/step-2']);
  }
  uploadFiles() {
    this.submitted = true;
    this.errorString = ''
    let type = 0;
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


    if (this.errorString.length > 1) {
      this.error = true;
    } else {
      this.mainService.createCourse(this.mainService.course).subscribe(response => {
        if(response){
          this.route.navigate(['dashboard/courses']);
        }
      });
    }
    console.log(this.mainService.course);
  }
}