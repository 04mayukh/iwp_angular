import { Component, OnInit } from '@angular/core';
import { Comment } from '../shared/comment'
import { ChaptersService } from '../services/chapters.service'


@Component({
  selector: 'app-chapters-view',
  templateUrl: './chapters-view.component.html',
  styleUrls: ['./chapters-view.component.css']
})
export class ChaptersViewComponent implements OnInit {

  constructor(private chapterservice:ChaptersService) { }
  chapters:any


  ngOnInit() {
    this.chapterservice.getChapters().subscribe((data) => {this.chapters=data.chapters;console.log(this.chapters)})
  }

}
