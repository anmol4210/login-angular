import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  submitbtn:any;
hello:string="text-danger";
  constructor() {
    this.submitbtn={
      btnname:"signup",
      btnclass:"signup"

    }
   }

  ngOnInit() {
  }

}
