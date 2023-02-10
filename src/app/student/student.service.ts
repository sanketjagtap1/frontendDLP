import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  base_url = environment.base_url;

  constructor(private http: HttpClient) { }

  enrollCourse(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'student/enrollCourse', obj)
  }

  getLect(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'student/getLectureList', obj)
  }

  joinLect(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'student/joinLect', obj)
  }

  

}
