import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsRoutingModule } from './results-routing.module';
import { ResultsComponent } from './results/results.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


@NgModule({
  declarations: [ResultsComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    ResultsRoutingModule
  ]
})
export class ResultsModule { }
