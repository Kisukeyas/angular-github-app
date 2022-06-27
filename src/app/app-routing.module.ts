import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenIssueComponent } from "./open-issue/open-issue.component";
import { ClosedIssueComponent } from "./closed-issue/closed-issue.component";
import { NewIssueComponent } from "./new-issue/new-issue.component";

const routes: Routes = [
  { path: "open", component: OpenIssueComponent},
  { path: "closed", component: ClosedIssueComponent},
  { path: "new", component: NewIssueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
