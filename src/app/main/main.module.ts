import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main/main.component';
import { NavComponent } from '../nav/nav.component';
import { SharedModule } from '../shared/shared.module';
import { MainService } from '../shared/main.service';
import { HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MainRoutingModule,
    FormsModule,
    MDBBootstrapModule.forRoot()

  ],
  providers:[MainService, HttpClient]
})
export class MainModule { }
