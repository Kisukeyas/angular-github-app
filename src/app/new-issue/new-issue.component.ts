import { Component, OnInit } from '@angular/core';
import { GetapiService } from "../service/getapi.service";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-new-issue',
  templateUrl: './new-issue.component.html',
  styleUrls: ['./new-issue.component.css']
})
export class NewIssueComponent implements OnInit {

  public registrationForm: FormGroup;
  public title: FormControl;
  public comment: FormControl;

  constructor(private getApiService: GetapiService,private builder:FormBuilder) { 
    this.title = new FormControl('', [Validators.required]);
    this.comment = new FormControl('', [Validators.required]);

    this.registrationForm = this.builder.group({
     title: this.title,
     comment: this.comment
    })
  }

  ngOnInit(): void {
  }

  post(){
    const title = document.getElementById("title") as HTMLInputElement;
    const comment = document.getElementById("comment") as HTMLInputElement;
    const obj = {"title": title.value,"body":comment.value};
    console.log(obj);
    this.getApiService.postOpenApi(obj).subscribe();
    this.registrationForm.reset();
  };

  

}
