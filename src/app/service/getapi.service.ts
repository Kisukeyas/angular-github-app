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
  token = "hogeeeee";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type" : "apprication/json",
      "Authorization": `Bearer ${this.token}`,
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

  postOpenApi(Issue:any): Observable<any>{ 
    return this.http.post(this.OpenApiUrl,Issue,this.httpOptions);
  };



}
