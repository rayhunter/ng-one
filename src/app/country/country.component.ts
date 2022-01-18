import { Component, OnInit } from '@angular/core';
/* example of inline-style 
   'n g c cname --inline-style --inline-template'
*/
@Component({
  selector: 'app-country',
  template: `
    <ng-template [ngIf]="color==='red'" class="custom">
      <h3 style="color: red;"> country works!</h3>
    </ng-template>
    <ng-template [ngIf]="color==='green'" class="custom">
      <h3 style="color: green;"> country works!</h3>
    </ng-template>
    <ng-template [ngIf]="color==='blue'" class="custom">
      <h3 style="color: blue;"> country works!</h3>
    </ng-template>
  `,
  styles: [
    `.custom {
      color: purple
    }`
  ]
})
export class CountryComponent implements OnInit {
  color='green';
  constructor() { }

  ngOnInit(): void {
  }

}
