import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-registration-data',
  templateUrl: './registration-data.component.html',
  styleUrls: ['./registration-data.component.css']
})
export class RegistrationDataComponent {
  @Input() item: any[] = [{ id: "", username: "", email: "", salary: "" }];
}
