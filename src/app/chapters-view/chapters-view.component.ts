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

  comments: Comment[]=[
    {
      "rating": 5,
      "comment": "Imagine all the eatables, living in conFusion!",
      "author": "John Lemon",
      "date": "2012-10-16T17:57:28.556094Z"
    },
    {
      "rating": 4,
      "comment": "Sends anyone to heaven, I wish I could get my mother-in-law to eat it!",
      "author": "Paul McVites",
      "date": "2014-09-05T17:57:28.556094Z"
    },
    {
      "rating": 3,
      "comment": "Eat it, just eat it!",
      "author": "Michael Jaikishan",
      "date": "2015-02-13T17:57:28.556094Z"
    }]
  ngOnInit() {
    this.chapterservice.getChapters().subscribe((data) => {this.chapters=data;console.log(this.chapters.chapters)})
  }

}
