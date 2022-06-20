import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpenIssueComponent } from "./open-issue/open-issue.component";
import { ClosedIssueComponent } from "./closed-issue/closed-issue.component";

const routes: Routes = [
  { path: "open", component: OpenIssueComponent},
  { path: "closed", component: ClosedIssueComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
