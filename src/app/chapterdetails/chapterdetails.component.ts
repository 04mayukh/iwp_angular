import { Component, OnInit } from '@angular/core';
import { EventdetailService } from '../services/eventdetail.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chapterdetails',
  templateUrl: './chapterdetails.component.html',
  styleUrls: ['./chapterdetails.component.css']
})
export class ChapterdetailsComponent implements OnInit {

  events: any[];

  constructor(private eventdetailservice: EventdetailService,private route: ActivatedRoute) { }

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.eventdetailservice.getEventsByChapter(id).subscribe(events => this.events = events);
  }

}
