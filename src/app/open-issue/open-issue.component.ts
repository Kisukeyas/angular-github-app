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
  public loading = "";

  constructor(getApiService: GetapiService) {
    this.getApiService = getApiService;
  }

  ngOnInit(): void {
    this.getOpenApi();
      }

  getOpenApi(){
    setTimeout(() => {
      this.loading = "hidden";
    }, 500);
    this.getApiService.getOpenApi().subscribe({next:(issue) => {this.IssueApi= issue},error:() => {console.log("error")},complete:() =>{console.log("finish")}});
    this.loading = "visible";
  }
  closeApi(issue:any){
    setTimeout(() => {
      this.loading = "hidden";
    }, 500);
    this.getApiService.CloseApi({"state":"closed"},issue.number).subscribe();
    this.loading = "visible";
  }

  }
