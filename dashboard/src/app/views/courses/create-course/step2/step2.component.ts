import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component implements OnInit {

  videos:number[] = new Array();
  constructor() { }

  ngOnInit(): void {
    this.videos.push(1);
  }
  addRow(){
    this.videos.push(1);
  }

}
