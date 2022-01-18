import { Component, OnInit } from '@angular/core';
/* example of inline-template 
   'n g c cname --inline-template'
*/
@Component({
  selector: 'app-student-list',
  template: `
    <h2 class="custom">
      student-list works!
    </h2>
    <h3 *ngFor="let item of users">Name is {{item}}</h3>
    <h3 *ngFor="let item of userDetails">Details: {{item.name}} {{item.email}}</h3>
  `,
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
  users=['liz','chad','sara','duke','beth'];
  userDetails=[
    { name:'liz',  email:'liz@gmail.com',  phone:'510-333-4545'},
    { name:'chad', email:'chad@gmail.com', phone:'970-234-4321'},
    { name:'sara', email:'sara@gmail.com', phone:'510-234-3456'},
    { name:'duke', email:'duke@gmail.com', phone:'970-432-2345'},
    { name:'beth', email:'beth@gmail.com', phone:'510-345-5463'} 
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
