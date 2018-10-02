import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  profile: any;
  pastEvent: any;
  upcomingEvent: any;

  constructor(private profileservice: ProfileService) { }

  ngOnInit() {
    this.profileservice.getProfile().subscribe(profile => this.profile=profile);
    this.profileservice.getPastEvent().subscribe(pastevent => this.pastEvent=pastevent);
    this.profileservice.getRegisteredEvent().subscribe(upcomingEvent => this.upcomingEvent=upcomingEvent);
  }

}
