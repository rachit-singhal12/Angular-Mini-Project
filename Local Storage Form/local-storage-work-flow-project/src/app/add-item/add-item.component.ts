import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrl: './add-item.component.css'
})

export class AddItemComponent {
 
  userdetail: { name: string, email: string, gender: string, password: string}[] = [];
  key = "user";
  user:{ name: string, email: string, gender: string, password: string}={ name:"", email:"", gender:"", password:""};
  email:any;
  index=-1;
  constructor(private route: ActivatedRoute,private router : Router) { }
  ngOnInit() {    

      let dataString = localStorage.getItem(this.key);
      if (dataString) {
        let data: { name: string, email: string, gender: string, password: string}[] = JSON.parse(dataString);
        this.userdetail.push(...data);
      }

     //getting parameter email
      this.route.paramMap.subscribe(params => {
      this.email = params.get('key');

      //find index of this parameter email
      if(this.email){
      for(let i=0; i<this.userdetail.length; i++) {
        if(this.email == this.userdetail[i].email) {
          this.index = i;
          break;
        }
      }
      //fetching user data;
      this.user = this.userdetail[this.index];
    }
    });

    
  }

  getUserData(data: { name: string, email: string, gender: string, password: string }) {
    if(this.index==-1)
    {
      this.userdetail.push(data);
      localStorage.setItem(this.key, JSON.stringify(this.userdetail));
      alert("Element Stored to Local Storage");
      this.navigator();
    }
    else{
      this.userdetail[this.index] = data;
      localStorage.setItem(this.key, JSON.stringify(this.userdetail));
      this.index=-1;
      alert("Element Updated Successfully");
      this.navigator();
    }
  }
  navigator()
  {
    this.router.navigateByUrl('tabledata');
  }
}
