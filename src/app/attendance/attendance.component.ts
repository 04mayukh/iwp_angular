import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../services/attendance.service';
import { Params, ActivatedRoute } from '@angular/router';
import { Restangular } from 'ngx-restangular';


@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.css']
})
export class AttendanceComponent implements OnInit {

  @ViewChild('aform') aFormDirective;
  attendanceForm: FormGroup;
  participants: any[];
  aformData: any;
  finalAttendance:any;
  constructor(private fb: FormBuilder,private route: ActivatedRoute, private attendanceservice:AttendanceService, private restangular: Restangular) { }

   createForm(x){
    this.attendanceForm = this.fb.group(x);
   }


   created: any = false;

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    console.log(id);
    this.attendanceservice.getUsersByevent(id).subscribe((data) => {
      this.participants=data.users;
      console.log(this.participants);
      this.formdata(this.participants);
      this.created = true
    })
  }

  formdata(data){
    var x:any ={};
    var y:any;
    var num: number;

    for (num = 0; num < data.length; num++) {
      y = data[num].userId;
      x[y] = data[num].attended;
      // console.log(y)
    }
    console.log(x);
    this.createForm(x);

  }

  onSubmit(){
    this.finalAttendance = this.attendanceForm.value;
    console.log(this.finalAttendance);

    var num: number;
    var key: any;
    var attended_flag: any;
    var data = this.participants
    for (num = 0; num < this.participants.length; num++) {
      key = data[num].userId;
      // console.log(this.finalAttendance[key]);
      attended_flag = this.finalAttendance[key];
      data[num].attended = attended_flag;
    }
    console.log(data);
    const id = this.route.snapshot.params['id'];
    this.restangular.all('api/organization/'+id+'/post-attendance').post().subscribe((data) => console.log(data))
  }

}
