import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OpenIssueComponent } from './open-issue/open-issue.component';
import { ClosedIssueComponent } from './closed-issue/closed-issue.component';

@NgModule({
  declarations: [
    AppComponent,
    OpenIssueComponent,
    ClosedIssueComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
