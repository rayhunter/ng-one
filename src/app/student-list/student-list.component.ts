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
  `,
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
