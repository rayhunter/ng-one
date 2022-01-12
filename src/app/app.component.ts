import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '12!';
  data = "hello code"
  getData(val:string)
  {
    console.warn(val)
  }
  getVal()
  {
    return "Code Step By Step"
  }
  getName(name:string)
  {
    alert (name)
  }
}
