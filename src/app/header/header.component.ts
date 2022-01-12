import { Component, OnInit } from '@angular/core';
/* example of inline-style 
   'n g c cname --inline-style'
*/
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
    `.custom {
      color: red
    }`
  ]
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
