import { Component, OnInit, ViewChild } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

import { Router } from '@angular/router';
import { Restangular } from 'ngx-restangular';


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
  loginData: any;
  formErrors = {
    'email': '',
    'password': ''
  };
  validationMessages = {
    email:{
      minlength:'Email must be at least 4 characters long.',
      required:'Email is required.'
    },
    password:{
      minlength:'Password must be at least 4 characters long.',
      required:'Password is required.'
    }
  };

  constructor(private fb: FormBuilder, private router: Router,private restangular:Restangular) {
    this.createForm();
   }

   createForm(){
    this.loginForm = this.fb.group({
      password: ['', [Validators.required,Validators.minLength(4)]],
      email: ['', [Validators.required,Validators.minLength(4)]]
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
    this.loginData = this.loginForm.value;
    console.log(this.loginData)
    this.restangular.all('api/auth/login').post(this.loginData).subscribe(data =>{
      console.log("SUccessssss");
      console.log(data.user);
      // this.restangular.one('api/posts/view-post').get().subscribe(data => {
      //   console.log("data coming");
      //   console.log(data.posts);
      // })
      this.router.navigate(['/', 'user']);
    });
    this.loginForm.reset();
    this.feedbackFormDirective.resetForm();    
  }

  matcher = new MyErrorStateMatcher();

}
