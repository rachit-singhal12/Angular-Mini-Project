import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css'
})
export class UserDetailsComponent {
  @Input() item:{name:string,email:string,designation:string}={name:'',email:'',designation:''};
}
