import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Search } from '../main/main/main.component';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Course } from '../models/Course';
import { Category } from '../models/Category';
import { User } from '../models/User';
import { vidArray } from '../dashboard/views/courses/create-course/step2/step2.component';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // cartdata: any = [];
  course: Course = new Course();
  uploadedVids: vidArray[] = new Array();
  courses: Course[] = new  Array();
  user:User = new User();
  vidChange = false;

  base_path = 'http://chefo.co:80/courses';
  base_category = 'http://chefo.co:80/category';
 //  base_url = 'https://chefo.herokuapp.com/';
  base_url = 'http://localhost:8080/';

  // product_id: number;
  constructor(private http: HttpClient) {
   // this.base_url = 'https://fiverr-backend.herokuapp.com/';
    // this.base_url = environment.base_url+"api/";
  }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
    
  registerCategory(c : Category) {

    return this.http.post<any>(this.base_url + 'registerCategory', c ,{})
      .pipe(map(data => {
        if (data) {
        }
        console.log(data);
        return data;
      }));
  }
  /*
  getCourses() {
    return this.http.get<any>(this.base_url + 'getCourse', {})
      .pipe(map(data => {
        if (data) {
        }
        console.log(data);
        return data;
      }));
  }*/
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

  deleteCourse(id: any) {
    return this.http.get<any>(this.base_url + 'deleteCourse/' + id, {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  deleteAWS(id: any) {
    return this.http.get<any>(this.base_url + 'deleteAWS/' + id, {})
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
  searchCourse(s : Search) {
    return this.http.post<any>(this.base_url + 'searchCourse', s)
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  searchInstructor() {
    return this.http.get<any>(this.base_url + 'searchInstructor', {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  registerCourse() {
    return this.http.get<any>(this.base_url + 'createCourse', {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }

  ///////////////////////////////////
   // Http Options

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };


  // Create a new item
  
  upload(item:any): Observable<any> {
    return this.http
      .post<any>(this.base_url + 'upload',item, {})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  uploadVideo(item:any): Observable<any> {
    return this.http
      .post<any>(this.base_url + 'uploadVideo',item, {
        reportProgress:true,
        observe:'events'
      },)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  createCourse(item:Course): Observable<any> {
    return this.http
      .post<Course>(this.base_url + 'createCourse',item, {})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  registerInstructor(user:User): Observable<any> {
    return this.http.post<User>(this.base_url + 'createInstructor', user,{})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  updateCourse(id:number,item:Course): Observable<any> {
    return this.http
      .patch<any>(this.base_url + 'updateCourse/'+id,item, {})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }


  updateVideoCount(id:number,count:number): Observable<any> {
    return this.http
      .patch<any>(this.base_url + 'updateVideoCount/'+id+'/'+count, {})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  updateMemberCount(id:number,count:number): Observable<any> {
    return this.http
      .patch<any>(this.base_url + 'updateMemberCount/'+id+'/'+count, {})
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  
  getInstructor(id: number) {
    return this.http.get<any>(this.base_url + 'getInstructor/' + id, {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  searchTheInstructor(profile: any) {
    return this.http.post<any>(this.base_url + 'searchInstructor/' ,  profile, {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }
  search(search: string) {
    return this.http.get<any>(this.base_url + 'search/' + search , {})
      .pipe(map(data => {
        if (data) {
        }
        return data;
      }));
  }

  // Get single Employee data by ID
  getItem(id): Observable<any> {
    return this.http
      .get<Course>(this.base_url + 'getCourse/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  // Get Employees data
  getList(): Observable<Course> {
    return this.http
      .get<Course>(this.base_path)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  getCourses(): Observable<any> {
    return this.http
      .get<any>(this.base_url + 'getCourse')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
  
  getCategories(): Observable<any> {
    return this.http
      .get<any>(this.base_url + 'getCategories')
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
/*
  // Update item by id
  updateItem(id, item): Observable<Employee> {
    return this.http
      .put<Employee>(this.base_path + '/' + id, JSON.stringify(item), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
*/
  // Delete item by id
  deleteItem(id) {
    return this.http
      .delete<Course>(this.base_path + '/' + id, this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }
}