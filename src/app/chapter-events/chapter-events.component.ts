import { Component, OnInit } from '@angular/core';
import { EventdetailService } from '../services/eventdetail.service'

@Component({
  selector: 'app-chapter-events',
  templateUrl: './chapter-events.component.html',
  styleUrls: ['./chapter-events.component.css']
})
export class ChapterEventsComponent implements OnInit {

  events: any;
  url: any

  constructor(private eventdetailservice: EventdetailService) { }

  ngOnInit() {
    this.eventdetailservice.getEvents().subscribe(events => {this.events = events.events;console.log(this.events)});
  }

}
