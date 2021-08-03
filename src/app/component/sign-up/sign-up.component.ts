import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PasswordMatcher} from "../../shared/password-matcher";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  // @ts-ignore
  signupForm: FormGroup;

  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    }, {validator: PasswordMatcher.match});
  }

  signup() {
    console.log('---form', this.signupForm.value);
  }

}
