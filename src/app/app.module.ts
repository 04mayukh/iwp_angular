import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { FeedComponent } from './feed/feed.component';
import { MatGridListModule } from '@angular/material/grid-list';

import { ReactiveFormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing/app-routing.module'


import 'hammerjs';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainViewComponent } from './main-view/main-view.component';
import { LoginComponent } from './login/login.component';
import { ChaptersViewComponent } from './chapters-view/chapters-view.component';
import { ChapterEventsComponent } from './chapter-events/chapter-events.component';
import { ChapterdetailsComponent } from './chapterdetails/chapterdetails.component';

// Services
import { FeedService } from './services/feed.service';
import { ProfileService } from './services/profile.service';
import { EventdetailService } from './services/eventdetail.service';


@NgModule({
  declarations: [
    AppComponent,
    FeedComponent,
    EventDetailComponent,
    UserProfileComponent,
    MainViewComponent,
    LoginComponent,
    ChaptersViewComponent,
    ChapterEventsComponent,
    ChapterdetailsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSliderModule,
    MatInputModule,
    MatTabsModule,
    MatExpansionModule,
    AppRoutingModule,
    MatIconModule
  ],
  providers: [FeedService,ProfileService,EventdetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
