import { Component, OnInit } from '@angular/core';
/* example of inline-style 
   'n g c cname --inline-style --inline-template'
*/
@Component({
  selector: 'app-country',
  template: `
    <p class="custom">
      country works!
    </p>
  `,
  styles: [
    `.custom {
      color: purple
    }`
  ]
})
export class CountryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
