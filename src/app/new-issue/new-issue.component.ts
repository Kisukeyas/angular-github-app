import { Component, OnInit } from '@angular/core';
import { GetapiService } from "../service/getapi.service";

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  constructor(private getApiService: GetapiService) { }

  ngOnInit(): void {
  }

  post(){
    const title = document.getElementById("title") as HTMLInputElement;
    const comment = document.getElementById("comment") as HTMLInputElement;
    const obj = {"title": title.value,"body":comment.value};
    console.log(obj);
    this.getApiService.postOpenApi(obj).subscribe();
    title.value = "";
    comment.value = "";
  };
}
