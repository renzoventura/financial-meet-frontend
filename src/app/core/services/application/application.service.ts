import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  //SERVER_APPLICATION_URL = 'http://localhost:8080/application'
  SERVER_APPLICATION_URL = "http://ec2-52-64-154-235.ap-southeast-2.compute.amazonaws.com:8080/application";


  GET_APPLICATION_BY_USER = this.SERVER_APPLICATION_URL + "/u/current/"
  GET_APPLICATION_BY_AGENT = this.SERVER_APPLICATION_URL + "/a/current"
  GET_ALL_APPLICATION = this.SERVER_APPLICATION_URL + "/i/all"
  PROGRESS_APPLICATION = this.SERVER_APPLICATION_URL + "/progress"

  CREATE_APPLICATION__URL = this.SERVER_APPLICATION_URL + "/create"

  getUserApplication(title, page, size, order) {
    let minusOnePage = String(page - 1); //since server side pagination starts with 0
    let params = new HttpParams();
    params = params.append('title', title);
    params = params.append('page', minusOnePage);
    params = params.append('size', size);
    params = params.append('order', order);
    return this.http.get<any>(this.GET_APPLICATION_BY_USER,
      { params: params }
    )
  }

  getAgentApplication(title, page, size, order) {
    let minusOnePage = String(page - 1); //since server side pagination starts with 0
    let params = new HttpParams();
    params = params.append('title', title);
    params = params.append('page', minusOnePage);
    params = params.append('size', size);
    params = params.append('order', order);
    return this.http.get<any>(this.GET_APPLICATION_BY_AGENT,
      { params: params }
    )
  }

  createApplication(application) {
    return this.http.post<any>(this.CREATE_APPLICATION__URL + "/mortgage", application);
  }

  getAllApplications(title, page, size, order) {
    let minusOnePage = String(page - 1); //since server side pagination starts with 0
    let params = new HttpParams();
    params = params.append('title', title);
    params = params.append('page', minusOnePage);
    params = params.append('size', size);
    params = params.append('order', order);
    return this.http.get<any>(this.GET_ALL_APPLICATION,
      { params: params }
    )
  }

  assignAgentToApplication(application, applicationId, agentId) {
    var ASSIGN_AGENT_URL = this.SERVER_APPLICATION_URL + "/" + applicationId + "/assign/agent/" + agentId
    return this.http.put<any>(ASSIGN_AGENT_URL, application)
  }

  removeAgentFromApplication(currentApplicationId) {
    var REMOVE_AGENT_URL = this.SERVER_APPLICATION_URL + "/" + currentApplicationId + "/remove/agent"
    return this.http.get<any>(REMOVE_AGENT_URL)
  }


  progressApplication(currentApplicationId) {
    var PROGESS_APPLICATION_URL = this.PROGRESS_APPLICATION + "/" + currentApplicationId
    return this.http.post<any>(PROGESS_APPLICATION_URL, null);
  }

}
