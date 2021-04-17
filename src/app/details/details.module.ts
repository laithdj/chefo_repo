import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details/details.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    DetailsRoutingModule
  ]
})
export class DetailsModule { }
