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
    this.profileservice.getProfile().subscribe(profile => {this.profile=profile;console.log(this.profile.user)});
    this.profileservice.getPastEvent().subscribe(pastevent => this.pastEvent=pastevent);
    this.profileservice.getFutureEvent().subscribe(upcomingEvent => this.upcomingEvent=upcomingEvent);
  }

}
