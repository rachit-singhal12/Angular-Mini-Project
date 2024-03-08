import { Component } from '@angular/core';
import { FormGroup, FormControl, FormControlName } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Reactive Form';
  formData = new FormGroup({
    username : new FormControl('Rachit Singhal'),
    password : new FormControl('123')
  });
  loginData()
  {
    console.warn(this.formData.value);
  }
}
