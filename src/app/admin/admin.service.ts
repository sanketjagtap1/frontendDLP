import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  base_url = environment.base_url;

  constructor(private http: HttpClient) { }

  getCourseCount(obj?: any): Observable<any> {
    return this.http.get<any>(this.base_url+'admin/getCourseCount', obj)
  }

   // auth Services
   getStudentCount(obj?: any): Observable<any> {
    return this.http.get<any>(this.base_url+'admin/getStudentCount', obj)
  }

   // auth Services
   getTeacherCount(obj?: any): Observable<any> {
    return this.http.get<any>(this.base_url+'admin/getTeacherCount', obj)
  }

   // auth Services
   getUserList(obj?: any): Observable<any> {
    return this.http.get<any>(this.base_url+'admin/getUserList', obj)
  }

   // auth Services
   getCourseList(obj?: any): Observable<any> {
    return this.http.get<any>(this.base_url+'admin/getCourseList', obj)
  }

  

}
