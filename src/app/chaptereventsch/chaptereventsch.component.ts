import { Component, OnInit } from '@angular/core';
import { EventdetailService } from '../services/eventdetail.service'

@Component({
  selector: 'app-chaptereventsch',
  templateUrl: './chaptereventsch.component.html',
  styleUrls: ['./chaptereventsch.component.css']
})
export class ChaptereventschComponent implements OnInit {

  events: any[];
  url: any

  constructor(private eventdetailservice: EventdetailService) { }

  ngOnInit() {
    this.eventdetailservice.getEvents().subscribe(events => {this.events = events.events;console.log(this.events)});
  }
}
