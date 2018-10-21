import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {

  @ViewChild('eventform') feedbackFormDirective;
  eventForm: FormGroup;
  event: any;
  type: any[] = ['Technical','Non-Technical','NGO','Gaming']
  
  formErrors = {
    'eventname': '',
    'tagline': '',
    'description': '',
    'category': '',
    'organiser': '',
    'price': '',
    'date': '',
    'time': '',
    'venue': ''
  };

  validationMessages = {
    'eventname': {
      'required':      'Event Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'tagline': {
      'required':      'Tag line is required.',
      'minlength':     'Tag line must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 45 characters long.'
    },
    'description': {
      'required':      'Description is required.',
      'minlength':     'Description must be at least 20 characters long.',
      'maxlength':     'FirstName cannot be more than 150 characters long.'
    },
    'organiser': {
      'required':      'Organiser is required.'
    },
    'price': {
      'required':      'Price is required.'
    },
    'date': {
      'required':      'Date is required.'
    },
    'time': {
      'required':      'Time is required.'
    },
    'venue': {
      'required':      'Venue is required.'
    },
  };




  constructor(private fb: FormBuilder) {
    this.createForm();
   }

  createForm(){
    this.eventForm = this.fb.group({
      eventname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      tagline: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(45)]],
      description: ['', [Validators.required,Validators.minLength(20),Validators.maxLength(150)]],
      organiser: ['', [Validators.required]],
      price: ['', [Validators.required]],
      date: ['', [Validators.required]],
      time: ['', [Validators.required]],
      venue: ['', [Validators.required]],
      category: 'Technical'
    });

    this.eventForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.eventForm) { return; }
    const form = this.eventForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
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

  onSubmit() {
    this.event = this.eventForm.value;
    this.eventForm.reset();
    this.feedbackFormDirective.resetForm();
    console.log(this.event);
  }

  ngOnInit() {
  }

  matcher = new MyErrorStateMatcher();

}
