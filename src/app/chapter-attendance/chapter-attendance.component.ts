import { Component, OnInit } from '@angular/core';
import { EventdetailService } from '../services/eventdetail.service';
import { ChaptersService } from '../services/chapters.service'

@Component({
  selector: 'app-chapter-attendance',
  templateUrl: './chapter-attendance.component.html',
  styleUrls: ['./chapter-attendance.component.css']
})
export class ChapterAttendanceComponent implements OnInit {

  constructor(private eventdetailservice: EventdetailService, private chapterservice: ChaptersService) { }

  pastEvents: any;
  upcomingEvents: any;
  url: any
  profile: any
  ngOnInit() {
    this.chapterservice.getChapterProfile().subscribe((data) => {
      this.profile = data.organization;
      console.log(this.profile);
      const id = this.profile.userId._id;
      console.log(id)
      this.eventdetailservice.getEventsByChapter(id).subscribe((data) =>{
        this.upcomingEvents = data.upcomingEvents;
        this.pastEvents = data.conductedEvents;
        console.log(this.upcomingEvents);
        console.log(this.pastEvents);
      })
    })
  }

}
