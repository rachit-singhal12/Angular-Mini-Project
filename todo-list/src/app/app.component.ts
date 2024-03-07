import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Todo list app';
  task:any[] = [];
  addTask(data:any)
  {
    alert("Task Added")
    this.task.push({id : this.task.length,name : data});
  }
  removeTask(id:any)
  {
    alert("element removes");
    console.log(id);
    this.task = this.task.filter(item=>item.id!==id);
    
  }
}
