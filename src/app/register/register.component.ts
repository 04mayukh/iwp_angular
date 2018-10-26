import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Restangular } from 'ngx-restangular';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider
} from 'angular-6-social-login';


import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @ViewChild('rform') registerFormDirective;
  registerForm: FormGroup;

  constructor(private fb: FormBuilder,private restangular: Restangular,private socialAuthService: AuthService) { 
  }

  student: any ={
    name: ['', [Validators.required,Validators.minLength(4)]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required,Validators.pattern]],
    description: ['', [Validators.required]],
    password: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    photo: [''],
    role: ['', [Validators.required]],
    gender: ['', [Validators.required]],
    regNo: ['', [Validators.required]],
    skills: [[], [Validators.required]]
  }

  organisation: any = {
    name: ['', [Validators.required,Validators.minLength(4)]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    description: ['', [Validators.required]],
    password: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    photo: [''],
    role: ['', [Validators.required]], 
    domain: ['', [Validators.required]], 
    moto: ['', [Validators.required]], 
    board: ['']    
  }

  faculty: any = {
    name: ['', [Validators.required,Validators.minLength(4)]],
    username: ['', [Validators.required]],
    email: ['', [Validators.required]],
    description: ['', [Validators.required]],
    password: ['', [Validators.required]],
    phone: ['', [Validators.required]],
    photo: [''],
    role: ['', [Validators.required]],
    school: ['', [Validators.required]],
    gender: ['', [Validators.required]]
  }
  formErrors = {
    'name': '',
    'username': '',
    'email': '',
    'description': '',
    'password': '',
    'phone': '',
    'photo': '',
    'role': '',
    'school': '',
    'gender': '',
    'domain': '',
    'moto': '',
    'board': '',
    'regNo': '',
    'skills': ''
  };
  validationMessages = {
    name:{
      minlength:'Email must be at least 4 characters long.',
      required:'Name is required.'
    },
    username:{
      required:'This field is required.'
    },
    email:{
      required:'This field is required.',
      pattern:'Not a valid VIT email Id'
    },
    description:{
      required:'This field is required.'
    },
    password:{
      required:'This field is required.'
    },
    phone:{
      required:'This field is required.'
    },
    photo:{
      required:'This field is required.'
    },
    role:{
      required:'This field is required.'
    },
    school:{
      required:'This field is required.'
    },
    gender:{
      required:'This field is required.'
    },
    domain:{
      required:'This field is required.'
    },
    moto:{
      required:'This field is required.'
    },
    board:{
      required:'This field is required.'
    },
    regNo:{
      required:'This field is required.'
    },
    skills:{
      required:'This field is required.'
    }
  };

  created: any = false;
  stud: any = false;
  chapter: any = false;
  facul: any = false;
  formType: any

  buildForm(cat:any){
    this.created=true
    if(cat == 'student'){
      this.formType = "Student";
      this.stud = true;
      this.facul = false;
      this.chapter = false;
      this.registerForm = this.fb.group(this.student);
      this.registerForm.patchValue({'role':cat})
      console.log(this.registerForm.value);
    }
    if(cat == 'organisation'){
      cat = "organization"
      this.formType = "Organisation"
      this.chapter = true;
      this.stud = false;
      this.facul = false;
      this.registerForm = this.fb.group(this.organisation);
      this.registerForm.patchValue({'role':cat})
      console.log(this.registerForm.value);
    }
    if(cat == 'faculty'){
      this.formType = "Faculty"
      this.facul = true;
      this.stud = false;
      this.chapter= false;
      this.registerForm = this.fb.group(this.faculty);
      this.registerForm.patchValue({'role':cat})
      console.log(this.registerForm.value);
    }
    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }
  skill:any ='';
  onKey(event: any) { // without type info
    this.skill = event.target.value;
    event.target.value = '';
  }
  skills: any[]=[];
  addSkill(){
    this.skills.push(this.skill);
    this.skill = '';
    this.registerForm.patchValue({'skills':this.skills})

  }
  register: any = false;

  reset(){
    this.registerForm.reset();
  }

  onSubmit(){
    console.log(this.registerForm.value);   
    this.restangular.all('api/auth/register').post(this.registerForm.value).subscribe((data) => {
      this.registerForm.reset();
      if(data.success){
        this.register = true
      } 
      console.log(data)
    })
  }

  onValueChanged(data?: any) {
    if (!this.registerForm) { return; }
    const form = this.registerForm;
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
  google: any = false
  public socialSignIn(socialPlatform : string) {
    console.log("haha");
    let socialPlatformProvider;

      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    
    this.socialAuthService.signIn(socialPlatformProvider).then(
      (userData) => {
        var formMail = this.registerForm.value.email;
        console.log(formMail)
        if(formMail == userData.email){
          this.google = true
          console.log("haha");
          console.log(socialPlatform+" sign in data : " , userData);
          this.socialAuthService.signOut()
        } 
      }
    );
  }



  matcher = new MyErrorStateMatcher();

}
