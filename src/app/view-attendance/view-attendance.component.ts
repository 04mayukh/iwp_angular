import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AttendanceService } from '../services/attendance.service';
import { Params, ActivatedRoute } from '@angular/router';
import { EventdetailService } from '../services/eventdetail.service'

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {


  participants: any;
  event: any;
  constructor(private location: Location,private route: ActivatedRoute, private attendanceservice:AttendanceService, private eventdetailservice: EventdetailService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];

    this.eventdetailservice.getEventbyId(id).subscribe((data) => {
      this.event = data.event;
      console.log(data.event);
      this.attendanceservice.getUsersByevent(id).subscribe((data) => {
        this.participants=data.users;
        console.log(this.participants);
      })
  });
  }

  goBack(): void {
    this.location.back();
  }

}
