import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

import { Router } from '@angular/router';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('lform') feedbackFormDirective;
  loginForm: FormGroup;
  formErrors = {
    'username': '',
    'password': ''
  };
  validationMessages = {
    username:{
      minlength:'Username must be at least 4 characters long.',
      required:'Username is required.'
    },
    password:{
      minlength:'Password must be at least 8 characters long.',
      required:'Password is required.'
    }
  };

  constructor(private fb: FormBuilder, private router: Router) {
    this.createForm();
   }

   createForm(){
    this.loginForm = this.fb.group({
      password: ['', [Validators.required,Validators.minLength(8)]],
      username: ['', [Validators.required,Validators.minLength(4)]]
    });

    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
   }

   onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && (control.dirty || !control.valid)) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  ngOnInit() {
  }
  onSubmit() {
    this.loginForm.reset();
    this.feedbackFormDirective.resetForm();    
    this.router.navigate(['/', 'user']);
  }

  matcher = new MyErrorStateMatcher();

}
