import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenIssueComponent } from './open-issue/open-issue.component';
import { ClosedIssueComponent } from './closed-issue/closed-issue.component';
import { GetapiService } from "./service/getapi.service";

@NgModule({
  declarations: [
    AppComponent,
    OpenIssueComponent,
    ClosedIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [GetapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
