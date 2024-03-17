import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrl: './table-data.component.css'
})
export class TableDataComponent {
  constructor(private router : Router){}
  length = localStorage.length;
  userlist:any[]=[];
  key="user";
  ngOnInit() {
    let dataString = localStorage.getItem(this.key);
    if (dataString) {
      let data: { name: string, email: string, gender: string, password: string}[] = JSON.parse(dataString);
      this.userlist.push(...data);
    }
    console.log(this.userlist);
  }

  deleteData(data: { name: string, email: string, gender: string, password: string})
  {
    console.log(data)
    const index = this.userlist.findIndex(item => item.name == data.name
      && item.email == data.email && item.email == data.email && data.password==item.password);
    if (index !== -1) {
      this.userlist.splice(index, 1); 
      localStorage.setItem('user', JSON.stringify(this.userlist));
      
    }
  }
  clearAllData() {
    localStorage.clear();
    alert('All data from local storage has been removed');
    window.location.reload()
    
  }
}
