import { Component, OnInit } from '@angular/core';
import { Course } from '../../../../../models/Course';
import { MainService } from '../../../../../shared/main.service';
import { HttpClient } from '@angular/common/http';
import { retry, catchError } from 'rxjs/operators';


@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component implements OnInit {
  course:Course = new Course();
  myFiles: string[] = [];      
  selectedFile: File = null;
  constructor(private mainService:MainService,private http: HttpClient) { }

  ngOnInit(): void {
    this.course = this.mainService.course;
  }
  submit(){
    console.log(this.mainService.course);
    this.mainService.createCourse(this.mainService.course);
  }
  getFileDetails(e) {      
    //console.log (e.target.files);      

    this.selectedFile = <File>e.target.files[0]  
  }
  uploadFiles() {      
    let frmData = new FormData(); 
    console.log(this.selectedFile);     
    frmData.append("productImage", this.selectedFile, this.selectedFile.name);
    frmData.append("courseName", 'this');      
      
    this.mainService.course.productImage = this.selectedFile;
    setTimeout(() => {
      this.mainService.createCourse(frmData).subscribe(response => {
        if (response) {
          console.log(response);
        }
      });
    }, 2000);

    console.log(this.mainService.course);
  }
}
