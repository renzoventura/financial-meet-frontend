import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  SERVER_APPLICATION_URL = 'http://localhost:8080/application'

  GET_CURRENT_URL = this.SERVER_APPLICATION_URL + "/current"

  getCurrentUserApplication(){
    return this.http.get<any>(this.GET_CURRENT_URL);
  }
}
