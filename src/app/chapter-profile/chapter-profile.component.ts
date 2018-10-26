import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../services/chapters.service'
import { FeedbackService } from '../services/feedback.service'
import { EventdetailService } from '../services/eventdetail.service'

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

  constructor(private chapterservice: ChaptersService,private eventdetailservice: EventdetailService, private feedbackservice: FeedbackService) { }

  ngOnInit() {
    this.chapterservice.getChapterProfile().subscribe((data) => {
      this.profile = data.organization;
      console.log(this.profile);
      const id = this.profile.userId._id;
      console.log(id)
      this.eventdetailservice.getEventsByChapter(id).subscribe((data) =>{
        this.upcomingEvent = data.upcomingEvents;
        this.pastEvent = data.conductedEvents;
        console.log(this.upcomingEvent);
        console.log(this.pastEvent);
      })
    })
    this.feedbackservice.getFeedback().subscribe((result) => this.feedbacks = result);
  }

}
