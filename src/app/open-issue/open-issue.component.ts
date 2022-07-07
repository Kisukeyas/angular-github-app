import { Component, OnInit } from '@angular/core';
import { GetapiService } from "../service/getapi.service";

@Component({
  selector: 'app-open-issue',
  templateUrl: './open-issue.component.html',
  styleUrls: ['./open-issue.component.css']
})
export class OpenIssueComponent implements OnInit {

  getApiService: GetapiService;
  IssueApi:any = [];

  constructor(getApiService: GetapiService) {
    this.getApiService = getApiService;
  }

  ngOnInit(): void {
    this.getApiService.getOpenApi().subscribe(issue => this.IssueApi= issue);
      }

  getOpenApi(){
    this.getApiService.getOpenApi().subscribe(issue => this.IssueApi= issue);
  }
  closeApi(){
    const number = document.getElementById("number") as HTMLInputElement;
    console.log(number.value);
    this.getApiService.CloseApi({"state":"closed"},number.value).subscribe();
  }
  }
