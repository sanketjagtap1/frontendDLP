import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  base_url = environment.base_url;
  

  constructor(private http: HttpClient) { }

  getCourseCount(obj?: any): Observable<any> {
    return this.http.post<any>(this.base_url+'teacher/getCourseCount', obj)
  }

  addCourse(obj?: any): Observable<any> {
    return this.http.post<any>(this.base_url+'teacher/createCourse', obj)
  }
  

  

  
}
