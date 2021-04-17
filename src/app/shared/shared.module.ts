import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/compiler/src/core';

import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot()
  ],
  exports:[
  ]
})

export class SharedModule {
  public static forRoot() {
    return { ngModule: SharedModule };
  }
}