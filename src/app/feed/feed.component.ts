import { Component, OnInit } from '@angular/core';
import { Event } from '../shared/event';
import { FeedService } from '../services/feed.service';
import { Restangular } from 'ngx-restangular';
import { EventdetailService } from'../services/eventdetail.service';
import {MatSnackBar} from '@angular/material';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  events: any;
  constructor(private feedservice: FeedService,private restangular:Restangular, private eventdetailservice: EventdetailService,public snackBar: MatSnackBar) { }

  bool: any = true;
  ngOnInit() {
    this.feedservice.getFeed().subscribe((result) => 
    {
      this.events = result;
      console.log(this.events.posts);
    });

    this.restangular.one("api/all/role").get().subscribe((data) => {
      console.log(data);
      if(data.role == 'organization'){
        this.bool = false;
        console.log("haha");
        console.log(this.bool)
      }
    })

    
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
        if(data.liked == true){
          this.events.posts[index].likes.push('lol');
        }
        if(data.liked == false){
          this.events.posts[index].likes.pop();
        }
      }
    })
  }


  register(id:any){
    console.log(id);
    this.restangular.all("api/events/"+id+"/register").post().subscribe((data) => {
      console.log(data)
      var action = ":)"
      this.openSnackBar(data.message, action)
    },errorResponse => {
      console.log("Error with status code", errorResponse);    
      this.openSnackBar(errorResponse.data.message, ': |')
    })
  }


  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }

}
