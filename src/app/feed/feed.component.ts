import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { FeedService } from '../services/feed.service';
import { Restangular } from 'ngx-restangular';
@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  events: any;
  constructor(private feedservice: FeedService,private restangular:Restangular ) { }

  ngOnInit() {
    this.feedservice.getFeed().subscribe((result) => {this.events = result;console.log(this.events.posts)});
  }

  liked(id:any,index:any){
    console.log(id);
    var response = {
      postId: id
    }
    console.log(response);
    this.restangular.all("/api/posts/like-post").post(response).subscribe((data) => {
      console.log(data)
      if(data.success == true){
        this.events.posts[index].liked = data.liked;
      }
    })
  }

}
