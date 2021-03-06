import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private router: Router) { }

  SERVER_URL = "http://localhost:8080/auth";
  //SERVER_URL = "http://ec2-52-64-154-235.ap-southeast-2.compute.amazonaws.com:8080/auth";

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

  GET_AGENT = this.SERVER_URL + "/account"

  GET_CURRENT_ACOUNT = this.SERVER_URL + "/account/me"

  VERIFY_ACCOUNT = this.SERVER_URL + "/verify-account"

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

  getAllAgents(firstName, lastName, suburb, specialization, page, size,) {
    let minusOnePage = String(page); //since server side pagination starts with 0
    let params = new HttpParams();
    params = params.append('firstName', firstName);
    params = params.append('lastName', lastName);
    params = params.append('suburb', suburb);
    params = params.append('subType', specialization);
    params = params.append('page', minusOnePage);
    params = params.append('size', size);
    return this.http.get<any>(this.GET_AGENT_URL,
      { params: params })
  }

  getAllInternals() {
    return this.http.get<any>(this.GET_INTERNAL_URL)
  }

  getAgentById(id) {
    return this.http.get<any>(this.GET_AGENT + "/" + id)
  }

  getCurrentAccountDetails() {
    return this.http.get<any>(this.GET_CURRENT_ACOUNT)
  }

  verifyAccount(token) {
    let params = new HttpParams();
    console.log("TOKEN",token)
    params = params.append('token', token);
    console.log(this.VERIFY_ACCOUNT);
    return this.http.get<any>(this.VERIFY_ACCOUNT, { params: params })
  }

}
