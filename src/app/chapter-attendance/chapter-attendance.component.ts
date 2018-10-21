import { Component, OnInit } from '@angular/core';
import { EventdetailService } from '../services/eventdetail.service'

@Component({
  selector: 'app-chapter-attendance',
  templateUrl: './chapter-attendance.component.html',
  styleUrls: ['./chapter-attendance.component.css']
})
export class ChapterAttendanceComponent implements OnInit {

  constructor(private eventdetailservice: EventdetailService) { }

  events: any[];
  url: any
  
  ngOnInit() {
    this.eventdetailservice.getEvents().subscribe(events => this.events = events);
  }

}
