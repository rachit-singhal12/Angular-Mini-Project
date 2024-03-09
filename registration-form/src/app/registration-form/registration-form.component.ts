import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent {
  userDetails:any[] = [];

  getUserData=new FormGroup({
    username: new FormControl('Rachit Singhal',[Validators.required]),
    email: new FormControl('rachit@gmail.com',[Validators.required,Validators.email]),
    salary: new FormControl('10000',[Validators.required])
  });

  get username()
  {
    return this.getUserData.get('username');
  }
  get email()
  {
    return this.getUserData.get('email');
  }
  get salary()
  {
    return this.getUserData.get('salary');
  }
  
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
