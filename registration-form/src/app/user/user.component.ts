import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  constructor(private route : ActivatedRoute){}
  user:any;
  ngOnInit():void{
    this.user = this.route.snapshot.paramMap.get('id');
    console.warn(this.user);
  }
}
