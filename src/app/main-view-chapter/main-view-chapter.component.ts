import { Component, OnInit } from '@angular/core';
import { ChaptersService } from '../services/chapters.service';

@Component({
  selector: 'app-main-view-chapter',
  templateUrl: './main-view-chapter.component.html',
  styleUrls: ['./main-view-chapter.component.css']
})
export class MainViewChapterComponent implements OnInit {

  page:String = "Feed";
  profile:any;
  name:String;

  constructor( private chapterservice:ChaptersService) { }

  ngOnInit() {
    // this.chapterservice.getProfile().subscribe(profile => {this.profile=profile;this.name = this.profile.user.name;});
  }
  

  head(e){
    this.page = e;
  }

}
