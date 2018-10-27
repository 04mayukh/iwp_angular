import { Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChaptersService } from '../services/chapters.service'

import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

import { NeweventService } from '../services/newevent.service';
import { EventdetailService } from '../services/eventdetail.service';
import { Restangular } from 'ngx-restangular';
import {MatSnackBar} from '@angular/material';


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



  @ViewChild('lform') feedFormDirective;
  loginForm: FormGroup;
  newFeed: any;
  events: any[];
  formErrorsfeed = {
    'description': '',
    'eventId': '',
    'image':'',
    'name':''
  };
  validationMessagesfeed = {
    description:{
      minlength:'Email must be at least 4 characters long.',
      maxlength:'Cannot be more than 150 words',
      required:'Description is required.'
    },
    eventId:{
      required:'Event is required.'
    },
    image:{
      required: 'Image is required'
    },
    name:{
      required: 'Feed name is required'
    }
  };


  //Another one

  @ViewChild('eventform') feedbackFormDirective;
  eventForm: FormGroup;
  event: any;
  eventfeed: any;
  type: any[] = ['Technical','Non-Technical','NGO','Gaming']
  
  formErrors = {
    'eventName': '',
    'tagLine': '',
    'description': '',
    'category': '',
    'organiser': '',
    'price': '',
    'eventDate': '',
    'eventTime': '',
    'venue': ''
  };

  validationMessages = {
    eventName: {
      minlength:'Email must be at least 4 characters long.',
      required:'Email is required.'
    },
    tagLine: {
      required:      'Tag line is required.',
      minlength:     'Tag line must be at least 2 characters long.',
      maxlength:     'Last Name cannot be more than 45 characters long.'
    },
    description: {
      required:      'Description is required.',
      minlength:     'Description must be at least 20 characters long.',
      maxlength:     'FirstName cannot be more than 150 characters long.'
    },
    organiser: {
      required:      'Organiser is required.'
    },
    price: {
      required:      'Price is required.'
    },
    eventDate: {
      'required':      'Date is required.'
    },
    eventTime: {
      required:      'Time is required.'
    },
    venue: {
      required:      'Venue is required.'
    }
  };




  constructor(private fb: FormBuilder, private neweventservice: NeweventService, private chapterservice: ChaptersService, private eventdetailservice: EventdetailService, private restangular: Restangular, public snackBar: MatSnackBar) {
    this.createEventForm();
    this.createFeedForm();
   }


   openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

  createEventForm(){
    this.eventForm = this.fb.group({
      eventName: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      tagLine: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(45)]],
      description: ['', [Validators.required,Validators.minLength(20),Validators.maxLength(150)]],
      organiser: ['', [Validators.required]],
      price: ['', [Validators.required]],
      eventDate: ['', [Validators.required]],
      eventTime: ['', [Validators.required]],
      venue: ['', [Validators.required]],
      category: 'Technical'
    });

    this.eventForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  
  createFeedForm(){
    this.loginForm = this.fb.group({
      name: ['', [Validators.required]],
      eventId: ['', [Validators.required]],
      description: ['', [Validators.required,Validators.minLength(4)]],
      // file: ['', Validators.required]
    });

    this.loginForm.valueChanges.subscribe(data => this.onValueChangedfeed(data));
    this.onValueChangedfeed();
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


  onValueChangedfeed(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrorsfeed) {
      if (this.formErrorsfeed.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrorsfeed[field] = '';
        const control = form.get(field);
        if (control && (control.dirty || !control.valid)) {
          const messages = this.validationMessagesfeed[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrorsfeed[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  // selectedFile: File;

  // onFileChanged(event) {
  //   this.selectedFile = event.target.files[0];
  //   console.log(this.selectedFile)
  // }

  successUpload: any = false;
  onSubmit() {
    this.successUpload = true
    this.event = this.eventForm.value;
    this.eventForm.reset();
    this.feedbackFormDirective.resetForm();
    console.log(this.event);
    this.neweventservice.submitEvent(this.event).subscribe((data) => {
      console.log(data);
      this.successUpload = false;
      this.openSnackBar("Event Created", ";)")
    });
  }
  

  onFeedSubmit() {
    this.successUpload = true
    const date: Date = new Date();
    this.newFeed = this.loginForm.value;
    this.newFeed.date = date.toISOString();
    console.log(this.newFeed)
    this.loginForm.reset();
    this.feedFormDirective.resetForm();
    this.restangular.all('api/posts/write-post').post(this.newFeed).subscribe((data) => {
      console.log(data);
      this.successUpload = false;
      this.openSnackBar("Feed Created", ";)")
    })
  }

  profile: any;
  upcomingEvent: any;
  ngOnInit() {
    this.chapterservice.getChapterProfile().subscribe((data) => {
      this.profile = data.organization;
      console.log(this.profile);
      const id = this.profile.userId._id;
      console.log(id)
      this.eventdetailservice.getEventsByChapter(id).subscribe((data) =>{
        this.upcomingEvent = data.upcomingEvents;
        this.eventfeed = this.upcomingEvent;
        console.log(this.eventfeed);
      })
    })
  }

  matcher = new MyErrorStateMatcher();

}
