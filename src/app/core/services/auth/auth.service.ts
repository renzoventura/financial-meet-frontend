import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router) { }

  SERVER_URL = "ec2-52-64-154-235.ap-southeast-2.compute.amazonaws.com:8080/auth";

  TOKEN = "token";

  LOGIN_URL = this.SERVER_URL + "/signin"

  REGISTER_USER_URL = this.SERVER_URL + "/signup/user"
  REGISTER_AGENT_URL = this.SERVER_URL + "/signup/agent"
  REGISTER_INTERNAL_URL = this.SERVER_URL + "/signup/internal"

  CHECK_USER_URL = this.SERVER_URL + "/roles"

  GET_ROLE_URL = this.SERVER_URL + "/checkrole"
  GET_ROLE_DETAILS = this.SERVER_URL + "/me"

  GET_USERS_URL = this.SERVER_URL + "/users"
  GET_AGENT_URL = this.SERVER_URL + "/agents"
  GET_INTERNAL_URL = this.SERVER_URL + "/internals"


  ROLE_USER = "ROLE_USER"
  ROLE_AGENT = "ROLE_AGENT"
  ROLE_INTERNAL = "ROLE_INTERNAL"

  login(loginDetails) {
    return this.http.post<any>(this.LOGIN_URL, loginDetails);
  }

  loggedIn() {
    return !!localStorage.getItem(this.TOKEN);
  }

  getToken() {
    return localStorage.getItem(this.TOKEN);
  }

  registerUser(registerDetails) {
    return this.http.post<any>(this.REGISTER_USER_URL, registerDetails);
  }

  registerAgent(registerDetails) {
    return this.http.post<any>(this.REGISTER_AGENT_URL, registerDetails);
  }

  registerInternal(registerDetails) {
    return this.http.post<any>(this.REGISTER_INTERNAL_URL, registerDetails);
  }

  getUserRole() {
    return this.http.get<any>(this.CHECK_USER_URL)
  }

  getUserNameAndRole() {
    return this.http.get<any>(this.GET_ROLE_DETAILS)
  }

  getAllUsers() {
    return this.http.get<any>(this.GET_USERS_URL)
  }
  
  getAllAgents() {
    return this.http.get<any>(this.GET_AGENT_URL)
  }

  getAllInternals() {
    return this.http.get<any>(this.GET_INTERNAL_URL)
  }

}
