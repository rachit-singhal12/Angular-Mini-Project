import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private route : Router){}
  getData(data:any)
  {
    if(data.name == "Rachit Singhal" && data.password=="rachit123")
    {
      alert("Log in successful");
      sessionStorage.setItem("isUserLoggedIn","true");
      this.route.navigateByUrl('dashboard');
    }
    else{
      alert("Wrong user id and password")
      sessionStorage.setItem("isUserLoggedIn","false");
      
    }
  }
}
