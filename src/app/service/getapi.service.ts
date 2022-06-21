import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GetapiService {

  newsApiUrl = "https://newsapi.org/v2/everything?q=apple&from=2022-06-20&to=2022-06-20&sortBy=popularity&apiKey=d4a833d70e5d4b86a66b90304a52d52a";

  http: HttpClient;

  constructor(http: HttpClient) {
    this.http = http;
  }

  getApi(): Observable<any>{ 
    return this.http.get(this.newsApiUrl);
  };


}
