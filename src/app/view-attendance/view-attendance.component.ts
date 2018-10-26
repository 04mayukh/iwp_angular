import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { AttendanceService } from '../services/attendance.service';
import { Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-attendance',
  templateUrl: './view-attendance.component.html',
  styleUrls: ['./view-attendance.component.css']
})
export class ViewAttendanceComponent implements OnInit {


  participants: any;
  constructor(private location: Location,private route: ActivatedRoute, private attendanceservice:AttendanceService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.attendanceservice.getUsersByevent(id).subscribe((data) => {
      this.participants=data.users;
      console.log(this.participants);
    })
  }

  goBack(): void {
    this.location.back();
  }

}
