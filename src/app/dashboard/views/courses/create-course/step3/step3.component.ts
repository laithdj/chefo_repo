import { Component, OnInit, Renderer2 } from '@angular/core';
import { Course } from '../../../../../models/Course';
import { MainService } from '../../../../../shared/main.service';
import { HttpClient } from '@angular/common/http';


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
    const reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = (event: any) => {
    console.log(event.target.result);
    this.selectedFileUrl = event.target.result;
    }
  }
  uploadFiles() {
    // two api calls one to save file and one to save file location   
    let frmData = new FormData();
    frmData.append("productImage", this.selectedFile, this.selectedFile?.name);
    console.log(this.selectedFile);
    // this.mainService.course.productImage = this.selectedFile;
    this.mainService.upload(frmData).subscribe(response => {
        if (response) {
          console.log(response);
        }
      });
      // this.mainService.course.image = this.selectedFileUrl;
      /*
      this.mainService.createCourse(this.mainService.course).subscribe(response => {
        if (response) {
          console.log(response);
        }
      });*/
  }
}
