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
      // this.feedbacks = this.profile.feedback
      console.log(id)
      this.eventdetailservice.getEventsByChapter(id).subscribe((data) =>{
        this.upcomingEvent = data.upcomingEvents;
        this.upcomingEvent.length = data.upcomingEvents.length;
        this.pastEvent = data.conductedEvents;
        this.pastEvent.length = data.conductedEvents.length;
        console.log(this.upcomingEvent);
        console.log(this.pastEvent);
      });
      this.feedbackservice.getFeedback().subscribe((data) => {
        console.log(data.feedbacks);
        this.feedbacks = data.feedbacks;
        console.log("hahha")
      })
    })
  }

}
