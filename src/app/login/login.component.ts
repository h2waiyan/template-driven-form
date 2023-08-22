import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') loginForm?: NgForm;

  constructor() { }

  usrnm: string = '';
  email: string = '';
  que: string = 'teacher';
  ans: string = '';

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(">>>>>>>>");
    console.log(this.loginForm!.value);
  }

}
