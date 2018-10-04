import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
//  title = 'myApp';
count:number
constructor(){
  this.count=0;
}
 counter(){
  this.count++;
}
}
