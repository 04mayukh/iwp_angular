import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment';
import { ChaptersService } from '../services/chapters.service'

@Component({
  selector: 'app-chapters-view-ch',
  templateUrl: './chapters-view-ch.component.html',
  styleUrls: ['./chapters-view-ch.component.css']
})
export class ChaptersViewChComponent implements OnInit {

  constructor(private chapterservice:ChaptersService) { }


  chapters:any

  ngOnInit() {
    
    this.chapterservice.getChapters().subscribe((data) => {this.chapters=data.chapters;console.log(this.chapters)})
  }

}
