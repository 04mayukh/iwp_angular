import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { FeedService } from '../services/feed.service';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  events: Event[];

  constructor(private feedservice: FeedService ) { }

  ngOnInit() {
    this.feedservice.getFeed().subscribe(events => this.events = events);
  }

}
