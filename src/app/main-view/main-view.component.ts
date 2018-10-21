import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../services/profile.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

  page:String = "Feed";
  profile:any;
  name:String;
  chapter: any;
  student: boolean;

  constructor( private profileservice:ProfileService) { }

  ngOnInit() {
    this.profileservice.getProfile().subscribe(profile => {
      this.profile=profile;
      this.name = this.profile.user.name;
      if(this.profile.user.role == "Student"){
        console.log("csd")
        this.student=false;
        console.log(this.student)
        this.chapter=false;
      }
      if(this.profile.user.role == "Chapter"){
        console.log("dnfcj")
        this.chapter=true;
        this.student=false;
      }
    });
  }
  

  head(e){
    this.page = e;
  }

}
