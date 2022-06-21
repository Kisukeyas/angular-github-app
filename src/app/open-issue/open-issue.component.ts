import { Component, OnInit } from '@angular/core';
import { GetapiService } from "../service/getapi.service";

@Component({
  selector: 'app-open-issue',
  templateUrl: './open-issue.component.html',
  styleUrls: ['./open-issue.component.css']
})
export class OpenIssueComponent implements OnInit {

  getApiService: GetapiService;
  NewsApi:any = [];

  constructor(getApiService: GetapiService) {
    this.getApiService = getApiService;
  }

  ngOnInit(): void {
    const self = this;
    this.getApiService.getApi().subscribe(
      function (news) {
        console.log(news);
        return self.NewsApi= news.articles;
      }
    )
  }

}
