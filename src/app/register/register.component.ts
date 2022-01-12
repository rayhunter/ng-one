import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  getNameValue(val:string) {
    console.warn(val)
  }
  clearInput(el:any) {
    console.warn(el.value)
  }
  ngOnInit(): void {
  }

}
