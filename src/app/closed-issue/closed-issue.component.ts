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
  public loading = "";

  constructor(getApiService: GetapiService) {
    this.getApiService = getApiService;
  }

  ngOnInit(): void {
    this.getCloseApi();
      }

  getCloseApi(){
    setTimeout(() => {
      this.loading = "hidden";
    }, 500);
    this.getApiService.getClosedApi().subscribe({next:(issue) => {this.IssueApi= issue},error:() => {console.log("error")},complete:() =>{console.log("finish")}});
    this.loading = "visible";
  }

}
