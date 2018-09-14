import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event'
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  events: Event[] = [
    {
      event_name: "Gravitas Premier League",
      image: "/assets/images/jumble.png",
      category: "Technical",
      organiser: "IEEE-CS",
      price: "100",
      description: "Online simulation of online games and blah balh blalh"
    },
    {
      event_name: "Jumble Code",
      image: "/assets/images/jumble.png",
      category: "Technical",
      organiser: "IEEE-CS",
      price: "200",
      description: "Coding questions and fun and blah blah blep"
    },
   ];

  constructor() { }

  ngOnInit() {
  }

}
