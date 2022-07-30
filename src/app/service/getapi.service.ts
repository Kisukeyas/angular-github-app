import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  gitHubApiUrl = "https://api.github.com/repos/Kisukeyas/angular-github-app/issues";
  ClosedApiUrl = this.gitHubApiUrl + "?state=closed";

  private httpOptions = {
    headers: new HttpHeaders({
      "Content-Type" : "apprication/json",
      "Authorization": `token ${this.getToken()}`,
    })
  }

  constructor(private http: HttpClient) {
  }

  getOpenApi(): Observable<any>{ 
    return this.http.get(this.gitHubApiUrl);
  };

  getClosedApi(): Observable<any>{ 
    return this.http.get(this.ClosedApiUrl);
  };

  postOpenApi(Issue:any): Observable<any>{ 
    return this.http.post(this.gitHubApiUrl,Issue,this.httpOptions);
  };

  CloseApi(Issue:any,number:any): Observable<any>{ 
    return this.http.patch(this.gitHubApiUrl+"/"+number,Issue,this.httpOptions);
  };


  getToken(){
    let token = localStorage.getItem('appToken')
    if (token === "null") {
      token = prompt("Please Tell me you parsonal access token");
      localStorage.setItem('appToken',token as string);
    }
    console.log(token);
    return token;
  }



}
