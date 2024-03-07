import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Resuable Component';

  parentToChild = 100;

  childToParentGetData(item:any)
  {
    console.warn(item);
  }
  
  userDetails = [
    { name: "John Smith", email: "john.smith@example.com", designation: "Software Engineer" },
    { name: "Emma Johnson", email: "emma.johnson@example.com", designation: "Data Scientist" },
    { name: "Michael Williams", email: "michael.williams@example.com", designation: "Product Manager" },
    { name: "Sophia Jones", email: "sophia.jones@example.com", designation: "UI/UX Designer" },
    { name: "William Brown", email: "william.brown@example.com", designation: "Software Engineer" },
    { name: "Olivia Davis", email: "olivia.davis@example.com", designation: "Data Scientist" },
    { name: "James Miller", email: "james.miller@example.com", designation: "Product Manager" },
    { name: "John Wilson", email: "john.wilson@example.com", designation: "UI/UX Designer" },
    { name: "Jane Smith", email: "jane.smith@example.com", designation: "Software Engineer" },
    { name: "Michael Johnson", email: "michael.johnson@example.com", designation: "Data Scientist" },
    { name: "Emma Williams", email: "emma.williams@example.com", designation: "Product Manager" },
    { name: "William Jones", email: "william.jones@example.com", designation: "UI/UX Designer" },
    { name: "Olivia Brown", email: "olivia.brown@example.com", designation: "Software Engineer" },
    { name: "James Davis", email: "james.davis@example.com", designation: "Data Scientist" },
    { name: "Sophia Miller", email: "sophia.miller@example.com", designation: "Product Manager" },
    { name: "John Wilson", email: "john.wilson@example.com", designation: "UI/UX Designer" },
    { name: "Emma Smith", email: "emma.smith@example.com", designation: "Software Engineer" },
    { name: "Michael Johnson", email: "michael.johnson@example.com", designation: "Data Scientist" },
    { name: "Sophia Williams", email: "sophia.williams@example.com", designation: "Product Manager" },
    { name: "William Jones", email: "william.jones@example.com", designation: "UI/UX Designer" }
  ];
}
