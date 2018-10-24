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
  events: any;

  constructor(private profileservice: ProfileService) { }

  ngOnInit() {
    this.profileservice.getProfile().subscribe(profile => {
      this.profile=profile.user;
      console.log(this.profile)
    
      this.profileservice.getEvents().subscribe((data) => {
        console.log(data);
        this.events = data;
        this.pastEvent = data.attendedEvents;
        this.upcomingEvent = data.registeredEvents;
        console.log(this.pastEvent);
      });
    
    });
    
  }

}
