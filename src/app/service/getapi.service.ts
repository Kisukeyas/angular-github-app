import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  gitHubApiUrl = "https://api.github.com/repos/Kisukeyas/angular-github-app/issues";
  OpenApiUrl = this.gitHubApiUrl + "?state=open";
  ClosedApiUrl = this.gitHubApiUrl + "?state=closed";
  NewIssue = {};

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type" : "apprication/json",
      Authorization: ""
    })
  }

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getOpenApi(): Observable<any>{ 
    return this.http.get(this.OpenApiUrl);
  };

  getClosedApi(): Observable<any>{ 
    return this.http.get(this.ClosedApiUrl);
  };

  postOpenApi(): Observable<any>{ 
    return this.http.post(this.OpenApiUrl,this.NewIssue,this.httpOptions);
  };



}
