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
import {MatDividerModule} from '@angular/material/divider';



import { ReactiveFormsModule } from '@angular/forms'; 
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';




import { AppRoutingModule } from './app-routing/app-routing.module';
import { baseURL } from './shared/baseurl';
import { RestangularModule, Restangular } from 'ngx-restangular';
import { RestangularConfigFactory } from './shared/restConfig';


import 'hammerjs';
import { EventDetailComponent } from './event-detail/event-detail.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { MainViewComponent } from './main-view/main-view.component';
import { LoginComponent } from './login/login.component';
import { ChaptersViewComponent } from './chapters-view/chapters-view.component';
import { ChapterEventsComponent } from './chapter-events/chapter-events.component';
import { ChapterdetailsComponent } from './chapterdetails/chapterdetails.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material';



// Services
import { FeedService } from './services/feed.service';
import { ProfileService } from './services/profile.service';
import { EventdetailService } from './services/eventdetail.service';
import { FeedbackService } from './services/feedback.service';
import { MainViewChapterComponent } from './main-view-chapter/main-view-chapter.component';
import { ChapterProfileComponent } from './chapter-profile/chapter-profile.component';
import { ChaptersViewChComponent } from './chapters-view-ch/chapters-view-ch.component';
import { ChaptereventschComponent } from './chaptereventsch/chaptereventsch.component';
import { CreateEventComponent } from './create-event/create-event.component'


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
    ChapterdetailsComponent,
    MainViewChapterComponent,
    ChapterProfileComponent,
    ChaptersViewChComponent,
    ChaptereventschComponent,
    CreateEventComponent,
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
    MatIconModule,
    MatSlideToggleModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RestangularModule.forRoot(RestangularConfigFactory)
  ],
  providers: [FeedService,ProfileService,EventdetailService,FeedbackService,{provide: 'BaseURL', useValue: baseURL}],
  bootstrap: [AppComponent]
})
export class AppModule { }
