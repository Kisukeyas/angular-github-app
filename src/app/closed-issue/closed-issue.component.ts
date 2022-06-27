import { Component, OnInit } from '@angular/core';
import { GetapiService } from "../service/getapi.service";

@Component({
  selector: 'app-closed-issue',
  templateUrl: './closed-issue.component.html',
  styleUrls: ['./closed-issue.component.css']
})
export class ClosedIssueComponent implements OnInit {

  getApiService: GetapiService;
  IssueApi:any = [];

  constructor(getApiService: GetapiService) {
    this.getApiService = getApiService;
  }

  ngOnInit(): void {
    this.getApiService.getClosedApi().subscribe(issue => this.IssueApi= issue);
      }

}
