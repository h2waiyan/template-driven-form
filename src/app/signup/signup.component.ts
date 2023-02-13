import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  @ViewChild('f') SignUpForm! : NgForm;
  
  defaultQues = 'pet';

  quesans = 'test';
  constructor() { }

  userdata = {
    'username' : "",
    'email' : "",
    'secret' : "",
    'quesans' : "",
    'gender' : "",
  }

  submitted = false;

  genders = [
    'Male',
    'Female'
  ]

  ngOnInit(): void {

  }

  suggestUserName() {
    const suggestedName = 'Superuser';
  }

  // onSubmit(form : NgForm){
  //   console.log(form);
  //   console.log("Submitted");
  // }

  onSubmit(){
    console.log(this.SignUpForm)

    this.submitted = true;
    this.userdata.username = this.SignUpForm.value.userData.username;
    this.userdata.email = this.SignUpForm.value.userData.email;
    this.userdata.secret = this.SignUpForm.value.secret;
    this.userdata.quesans = this.SignUpForm.value.quesans;
    this.userdata.gender = this.SignUpForm.value.gender;

    console.log(this.userdata);

    this.SignUpForm.reset();
    
  }

  ngAfterViewInit() : void {
  
  }

}
