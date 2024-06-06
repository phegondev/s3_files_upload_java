import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class ApiserviceService {

  private BASE_URL = "http://localhost:5050";

  constructor(private http: HttpClient) { }

  addFile(formData: FormData): Observable<any> {
    return this.http.post(`${this.BASE_URL}/file/upload`, formData);
  }

  getAllFiles(): Observable<any> {
    return this.http.get(`${this.BASE_URL}/file/get-all`);
  }
}
