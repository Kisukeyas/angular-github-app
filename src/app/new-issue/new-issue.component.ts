import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.getToken();
  }

  post(){
    const title = document.getElementById("title") as HTMLInputElement;
    const comment = document.getElementById("comment") as HTMLInputElement;
    console.log(title.value);
    console.log(comment.value);
  };

  getToken(){
    const token = prompt("Please Tell me you parsonal access token");
    console.log(token);
    return token;
  }

}
