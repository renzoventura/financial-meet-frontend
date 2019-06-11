import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(private http: HttpClient) { }

  SERVER_APPLICATION_URL = 'http://localhost:8080/application'

  GET_CURRENT_URL = this.SERVER_APPLICATION_URL + "/current"

  GET_CURRENT_URL_WITH_PARAMS = this.SERVER_APPLICATION_URL + "/current/summary"

  CREATE_APPLICATION__URL = this.SERVER_APPLICATION_URL + "/create"

  getCurrentUserApplication() {
    return this.http.get<any>(this.GET_CURRENT_URL);
  }

  getCurrentUserApplicationWithParams(title, page, size) {
    let params = new HttpParams();
    params = params.append('title', title);
    params = params.append('page', page);
    params = params.append('size', size);
    
    return this.http.get<any>(this.GET_CURRENT_URL_WITH_PARAMS,
      { params: params }
    )
    //.map((res:Response) => <Object[]>res.json());;
  }

  getCurrentAgentApplication() {
    return this.http.get<Object[]>(this.GET_CURRENT_URL + "/agent");
  }

  createApplication(application) {
    return this.http.post<any>(this.CREATE_APPLICATION__URL, application);
  }

  getAllApplications() {
    return this.http.get<Object[]>(this.SERVER_APPLICATION_URL)
  }

  assignAgentToApplication(application, applicationId, agentId) {
    var ASSIGN_AGENT_URL = this.SERVER_APPLICATION_URL + "/" + applicationId + "/assign/agent/" + agentId
    return this.http.put<any>(ASSIGN_AGENT_URL, application)
  }

  removeAgentFromApplication(currentApplicationId) {
    var REMOVE_AGENT_URL = this.SERVER_APPLICATION_URL + "/" + currentApplicationId + "/remove/agent"
    return this.http.get<any>(REMOVE_AGENT_URL)
  }

}
