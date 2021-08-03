import {AfterViewInit, Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit, AfterViewInit {
  // @ts-ignore
  loginForm: FormGroup;
  // Use with the generic validation message class
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };

  constructor(private fb: FormBuilder) {
    // Defines all of the validation messages for the form.
    this.validationMessages = {
      email: {
        required: 'Required',
        email: 'invalid email'
      },
      password: {
        required: 'Required',
        minlength: ' length must be greater than 8'
      }
    };
  }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  login() {
    console.log('---form', this.loginForm.value);
  }

  ngAfterViewInit(): void {
  }

}
