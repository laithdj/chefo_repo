import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/models/Course';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component implements OnInit {
  course: Course = new Course();

  constructor() { }

  ngOnInit(): void {
  }

}
