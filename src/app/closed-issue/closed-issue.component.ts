import { Component, OnInit } from '@angular/core';
import { GetapiService } from "../service/getapi.service";

@Component({
  selector: 'app-closed-issue',
  templateUrl: './closed-issue.component.html',
  styleUrls: ['./closed-issue.component.css']
})
export class ClosedIssueComponent implements OnInit {

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
