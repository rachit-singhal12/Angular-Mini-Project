import { Component } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
 posts:any;
 constructor(private post: DataService){}

 ngOnInit()
 {
  this.post.userPosts().subscribe(response=>{
    this.posts = response;
  })
 }
}
