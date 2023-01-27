import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  base_url = 'http://localhost:3000/';

  constructor(private http: HttpClient) { }

  login(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'auth/login', obj)
  }

   // auth Services
   registration(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'student/register', obj)
  }
  
}
