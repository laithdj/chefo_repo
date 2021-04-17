import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoPlayerComponent } from './video-player.component';
import { VideoPlayerRoutingModule } from './video-player.routing';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';


@NgModule({
  declarations: [VideoPlayerComponent],
  imports: [
    CommonModule,
    MDBBootstrapModule.forRoot(),
    VideoPlayerRoutingModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule
  ]
})
export class VideoPlayerModule { }
