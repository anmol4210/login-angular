import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-submitbtn',
  templateUrl: './submitbtn.component.html',
  styleUrls: ['./submitbtn.component.css']
})
export class SubmitbtnComponent implements OnInit {
@Input() btn:any;
  constructor() {
    
   }

  ngOnInit() {
  }

}
