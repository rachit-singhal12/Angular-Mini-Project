import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {
  constructor(private route : Router){}

  getStatus()
  {
    sessionStorage.setItem("isUserLoggedIn","false");
    this.route.navigateByUrl('');
  }
}
