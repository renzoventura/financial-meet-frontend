import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  SERVER_APPLICATION_URL = 'http://localhost:8080/application'

  GET_CURRENT_URL = this.SERVER_APPLICATION_URL + "/current"
  
  CREATE_APPLICATION__URL = this.SERVER_APPLICATION_URL + "/create"

  getCurrentUserApplication(){
    return this.http.get<any>(this.GET_CURRENT_URL);
  }

  getCurrentAgentApplication(){
    return this.http.get<any>(this.GET_CURRENT_URL + "/agent");
  }

  createApplication(application) {
    return this.http.post<any>(this.CREATE_APPLICATION__URL, application);
  }

  getAllApplications() {
    return this.http.get<any>(this.SERVER_APPLICATION_URL)
  }

  assignAgentToApplication(application, applicationId, agentId) {
    var ASSIGN_AGENT_URL = this.SERVER_APPLICATION_URL + "/" + applicationId + "/assign/agent/" + agentId
    return this.http.put<any>(ASSIGN_AGENT_URL, application)
  }

  removeAgentFromApplication(currentApplicationId) {
    var REMOVE_AGENT_URL = this.SERVER_APPLICATION_URL + "/" + currentApplicationId +"/remove/agent"
    return this.http.get<any>(REMOVE_AGENT_URL)
  }

}
