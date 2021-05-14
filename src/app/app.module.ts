import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './footer/footer.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import { AuthModule } from '@auth0/auth0-angular'
import { environment as env } from '../environments/environment'
@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ChartsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    AuthModule.forRoot({
      ...env.auth,
    })

  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
