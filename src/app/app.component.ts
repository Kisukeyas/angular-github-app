import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-github-app';

  resetToken(){
    let token = localStorage.getItem('appToken')
    localStorage.setItem('appToken',token as string);
    if (token) {
      localStorage.removeItem('appToken');
      token = prompt("Please Tell me you parsonal access token");
      localStorage.setItem('appToken',token as string);
    }
    console.log(token);
    return token;
  }
}
