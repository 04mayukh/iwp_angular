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
    this.chapterservice.getChapterProfile().subscribe(profile => {
      this.profile=profile;
      console.log(this.profile.organization)
      this.name = this.profile.organization.userId.name;
    });
  }
  

  head(e){
    this.page = e;
  }

}
