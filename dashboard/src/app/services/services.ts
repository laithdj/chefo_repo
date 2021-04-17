import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Course } from '../models/Course';
@Injectable({
  providedIn: 'root'
})
export class MainService {
  // cartdata: any = [];
  base_url: string;
  // product_id: number;
  constructor(private http: HttpClient) {
    this.base_url = 'https://fiverr-backend.herokuapp.com/';
    // this.base_url = environment.base_url+"api/";
  }
  getCourses() {
    return this.http.get<any>(this.base_url + 'getCourse', {})
      .pipe(map(data => {
        if (data) {
        }
        console.log(data);
        return data;
      }));
  }
  getInstructors() {
    return this.http.get<any>(this.base_url + 'getInstructor', {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  getCourse(id: number) {
    return this.http.get<any>(this.base_url + 'getCourse/' + id, {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  getInstructor(id: number) {
    return this.http.get<any>(this.base_url + 'getInstructor/' + id, {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  deleteCourse(id: number) {
    return this.http.get<any>(this.base_url + 'deleteCourse/' + id, {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  deleteInstructor(id: number) {
    return this.http.get<any>(this.base_url + 'deleteInstructor' + id, {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  /*
  searchCourse(s : Search) {
    return this.http.post<any>(this.base_url + 'searchCourse', s)
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  */
  searchInstructor() {
    return this.http.get<any>(this.base_url + 'searchInstructor', {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  registerCourse(course:Course) {
    return this.http.post<any>(this.base_url + 'createCourse', course)
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }

  ///////////////////////////////////
}