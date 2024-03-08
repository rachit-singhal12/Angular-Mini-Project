import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive Form';
  formData = new FormGroup({
    username : new FormControl('',[Validators.required]),
    password : new FormControl('')
  });
  loginData()
  {
    console.warn(this.formData.value);
  }
  get username()
  {
    return this.formData.get('username');
  }
  get password()
  {
    return this.formData.get('password');
  }
}
