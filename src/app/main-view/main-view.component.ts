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

  constructor( private profileservice:ProfileService) { }

  ngOnInit() {
    this.profileservice.getProfile().subscribe(profile => {this.profile=profile;this.name = this.profile.user.name;});
  }
  

  head(e){
    this.page = e;
  }

}
