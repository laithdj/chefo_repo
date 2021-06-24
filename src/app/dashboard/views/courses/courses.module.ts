import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../../shared/shared.module';
import { FileUploadModule } from '@iplab/ngx-file-upload';
import { CreateCourseComponent } from './create-course/create-course.component';
import { Step1Component } from './create-course/step1/step1.component';
import { Step2Component } from './create-course/step2/step2.component';
import { Step3Component } from './create-course/step3/step3.component';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { EditStep1Component } from './edit-course/step1/step1.component';
import { EditStep2Component } from './edit-course/step2/step2.component';
import { EditStep3Component } from './edit-course/step3/step3.component';


@NgModule({
  declarations: [CoursesComponent, CreateCourseComponent, Step1Component, Step2Component, Step3Component, EditCourseComponent, EditStep1Component
  ,EditStep2Component,EditStep3Component],
  imports: [
    CommonModule,
    FormsModule,
    CoursesRoutingModule,
    HttpClientModule,
    SharedModule,
    FileUploadModule,
    MDBBootstrapModule.forRoot(),

  ],
  providers: [HttpClient],

})
export class CoursesModule { }
