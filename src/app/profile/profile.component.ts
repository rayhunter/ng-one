import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor() { }
  count=0;
  counter(type:string) 
  {
    type==='add' ? this.count++:this.count--
  }
  ngOnInit(): void {
  }

}
