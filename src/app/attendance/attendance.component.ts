import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AttendanceService } from '../services/attendance.service';
import { Params, ActivatedRoute } from '@angular/router';


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
  constructor(private fb: FormBuilder,private route: ActivatedRoute, private attendanceservice:AttendanceService) { }

   createForm(x){
    this.attendanceForm = this.fb.group(x);
   }



  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.attendanceservice.getUsersByEvent(id).subscribe((data) => {
      this.participants=data;
      console.log(this.participants);
      this.formdata(this.participants);
    })
  }

  formdata(data){
    var x:any ={};
    var y:any;
    var num: number;

    for (num = 0; num < data.length; num++) {
      y = data[num]._id;
      x[y] = false;
      // console.log(y)
    }
    this.createForm(x);

  }

  onSubmit(){
    this.finalAttendance = this.attendanceForm.value;
    console.log(this.finalAttendance);
  }

}
