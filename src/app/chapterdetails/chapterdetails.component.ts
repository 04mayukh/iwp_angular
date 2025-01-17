import { Component, OnInit, ViewChild } from '@angular/core';
import { EventdetailService } from '../services/eventdetail.service';
import { ChaptersService } from '../services/chapters.service';
import { Params, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FeedbackService } from '../services/feedback.service';
import { ContactType } from '../shared/contact';
import { Location } from '@angular/common';
import { Restangular } from 'ngx-restangular';
import {MatSnackBar} from '@angular/material';

import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-chapterdetails',
  templateUrl: './chapterdetails.component.html',
  styleUrls: ['./chapterdetails.component.css']
})
export class ChapterdetailsComponent implements OnInit {

  @ViewChild('fform') feedbackFormDirective;
  feedbackForm: FormGroup;
  feedback: any;
  contactType = ContactType;
  res: any;
  y:number = 0;
  show:number = 0;
  
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '',
    'message': ''
  };

  validationMessages = {
    'firstname': {
      'required':      'First Name is required.',
      'minlength':     'First Name must be at least 2 characters long.',
      'maxlength':     'FirstName cannot be more than 25 characters long.'
    },
    'lastname': {
      'required':      'Last Name is required.',
      'minlength':     'Last Name must be at least 2 characters long.',
      'maxlength':     'Last Name cannot be more than 25 characters long.'
    },
    'telnum': {
      'required':      'Tel. number is required.',
      'pattern':       'Tel. number must contain only numbers.'
    },
    'message': {
      'required':      'Message is required.'
    },
  };




  constructor(private eventdetailservice: EventdetailService,private route: ActivatedRoute,private fb: FormBuilder, private feedbackservice: FeedbackService,private location: Location, private chapterservice: ChaptersService,private restangular: Restangular,public snackBar: MatSnackBar) { 
    this.createForm();
  }

  createForm(){
    this.feedbackForm = this.fb.group({
      // firstname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      // lastname: ['', [Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      // telnum: ['', [Validators.required,Validators.pattern]],
      // email: ['', [Validators.required,Validators.email]],
      // agree: false,
      contactMethod: 'None',
      message: ['', [Validators.required]]
    });

    this.feedbackForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }


  onValueChanged(data?: any) {
    if (!this.feedbackForm) { return; }
    const form = this.feedbackForm;
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
    const id = this.route.snapshot.params['id'];
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.restangular.all('api/common/organization/'+id+'/feedback').post(this.feedback).subscribe((data) => {
      console.log(data);
      this.openSnackBar("Feedback Sent", ':)')
    });
    this.feedbackFormDirective.resetForm(); 
  }

  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  goBack(): void {
    this.location.back();
  }
  chapter: any;
  upcomingEvents: any;
  pastEvents: any;
  orgbool: any = false;
  userbool: any = false;
  contact: any = false;

  contactUs(){
    if(this.contact == true){
      this.contact = false
      this.feedbackForm.patchValue({contactMethod:'None'})
    }
    else{
      this.contact = true
    }
  }


  ngOnInit() {
    console.log("lol");
    const id = this.route.snapshot.params['id'];
    this.chapterservice.getChapterById(id).subscribe((data) => {
      this.chapter = data.organization;
      console.log(this.chapter);

      this.restangular.one("api/all/role").get().subscribe((data) => {
        console.log(data);
        if(data.role == 'organization'){
          this.orgbool = true;
          console.log("haha");
          console.log(this.userbool)
        }
        else{
          this.userbool = true;
        }
      })

      this.eventdetailservice.getEventsByChapter(id).subscribe(events => 
        {
          console.log(events)
          this.upcomingEvents = events.upcomingEvents;
          this.upcomingEvents.length = this.upcomingEvents.length
          this.pastEvents = events.conductedEvents;
          this.pastEvents.length = this.pastEvents.length;
          console.log(this.upcomingEvents);
          console.log(this.pastEvents)
        });
    });
  }

}
