import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  userDetails:any[] = [];

  getUserData=new FormGroup({
    username: new FormControl('Rachit Singhal'),
    email: new FormControl('rachit@gmail.com'),
    salary: new FormControl('10000')
  });

  submitUserData() {
    const data = this.getUserData.value;
    this.userDetails.push({ 
      id: this.userDetails.length, 
      username: data.username, 
      email: data.email, 
      salary: data.salary 
    });
    console.warn(this.userDetails);
  }
}
