import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  registerForm = new FormGroup(
    {
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required]),
      genderradio: new FormControl('')
    }
  )

  genders = ['Male', 'Female']

  ngOnInit(): void {
  }

  submit() {
    console.log(">>>>>>");
    console.log(this.registerForm.valid);
  }
}
