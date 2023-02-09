import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  base_url = environment.base_url;

  constructor(private http: HttpClient) { }

  login(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'auth/login', obj)
  }

   // auth Services
   registration(obj: any): Observable<any> {
    return this.http.post<any>(this.base_url+'student/register', obj)
  }
  
}
