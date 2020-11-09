import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  private host = environment.host

  constructor(
    private http: HttpClient
  ) { 
    this.http = http
  }

  headers = new HttpHeaders();

  getAll<T>(url:string): Observable<T> {
    return this.http.get<T>(`${this.host}/${url}`);
  }
  
  get<T>(url:string, id:number): Observable<T> {
    return this.http.get<T>(`${this.host}/${url}/${id}`);
  }

  post<T>(url:string, body:T): Observable<T> {
    return this.http.post<T>(`${this.host}/${url}`, body);
  }

  delete<T>(url:string, id:number): Observable<T> {
    return this.http.delete<T>(`${this.host}/${url}/${id}`);
  }
  
}
