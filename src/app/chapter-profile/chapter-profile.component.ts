import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';
import { FeedbackService } from '../services/feedback.service'

@Component({
  selector: 'app-chapter-profile',
  templateUrl: './chapter-profile.component.html',
  styleUrls: ['./chapter-profile.component.css']
})
export class ChapterProfileComponent implements OnInit {

  profile: any;
  pastEvent: any;
  upcomingEvent: any;
  feedbacks: any;

  constructor(private profileservice: ProfileService, private feedbackservice: FeedbackService) { }

  ngOnInit() {
    this.profileservice.getProfile().subscribe(profile => this.profile=profile);
    this.profileservice.getPastEvent().subscribe(pastevent => {this.pastEvent=pastevent;console.log(this.pastEvent)});
    this.profileservice.getRegisteredEvent().subscribe(upcomingEvent => this.upcomingEvent=upcomingEvent);
    this.feedbackservice.getFeedback().subscribe((result) => this.feedbacks = result);
  }

}
