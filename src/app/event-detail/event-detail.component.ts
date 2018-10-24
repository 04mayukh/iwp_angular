import { Component, OnInit, Input, ViewChild, Inject } from '@angular/core';
import { EventdetailService } from '../services/eventdetail.service'

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Comment } from '../shared/comment'

import {ErrorStateMatcher} from '@angular/material/core';
import {FormControl, FormGroupDirective, NgForm} from '@angular/forms';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Restangular } from 'ngx-restangular';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-event-detail',
  templateUrl: './event-detail.component.html',
  styleUrls: ['./event-detail.component.css']
})
export class EventDetailComponent implements OnInit {

    @ViewChild('cform') feedbackFormDirective;
    
    event: any;

    commentForm: FormGroup;
    newcomment: Comment;
    formErrors = {
      'author': '',
      'comment': ''
    };
    validationMessages = {
      author:{
        minlength:'Name must be at least 2 characters long.',
        required:'Name is required.'
      },
      comment:{
        required:'Comment is required.'
      }
    };  


  constructor(private fb: FormBuilder, private eventdetailservice: EventdetailService,private route: ActivatedRoute,private location: Location, private restangular: Restangular) {
    this.createForm();
   }
   createForm(){
    this.commentForm = this.fb.group({
      rating: [5],
      comment: ['', [Validators.required]],
      author: ['', [Validators.required,Validators.minLength(2)]]
    });

    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
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

  id: any;
  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    console.log(this.id);
    // this.eventdetailservice.getEventbyId(id).subscribe(event => {this.event = event.events;console.log(event.events)});
    this.eventdetailservice.getEventbyId(this.id).subscribe(event => {this.event = event.event;console.log(this.event)});
  }

  onSubmit(){
    this.newcomment = this.commentForm.value;
    const date: Date = new Date();
    this.newcomment.date = date.toISOString();
    console.log(this.newcomment)
    this.restangular.all('api/events/'+this.id+'/comment').post(this.newcomment).subscribe((res) => {
      console.log(res);
      this.commentForm.reset();
      this.feedbackFormDirective.resetForm({rating:5,author:'',comment:''});
      this.event.comments.push(this.newcomment);
    });
  }

  goBack(): void {
    this.location.back();
  }


  matcher = new MyErrorStateMatcher();
}