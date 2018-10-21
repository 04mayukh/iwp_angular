import { Routes } from '@angular/router';

import { EventDetailComponent } from '../event-detail/event-detail.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { MainViewComponent } from '../main-view/main-view.component';
import { LoginComponent } from '../login/login.component';
import { ChaptersViewComponent } from '../chapters-view/chapters-view.component';
import { ChapterEventsComponent } from '../chapter-events/chapter-events.component';
import { FeedComponent } from '../feed/feed.component';
import { ChapterdetailsComponent } from '../chapterdetails/chapterdetails.component';
import { MainViewChapterComponent } from '../main-view-chapter/main-view-chapter.component';
import { ChapterProfileComponent } from '../chapter-profile/chapter-profile.component';
import { ChaptersViewChComponent } from '../chapters-view-ch/chapters-view-ch.component';
import { ChaptereventschComponent } from '../chaptereventsch/chaptereventsch.component';
import { CreateEventComponent } from '../create-event/create-event.component';

export const routes: Routes = [
    { path: 'login' ,component: LoginComponent},
    { path: 'user' ,component: MainViewComponent, children:[
            { path: '', redirectTo: '/user/feed', pathMatch: 'full'},
            { path: 'profile',component: UserProfileComponent},
            { path: 'chapters',component: ChaptersViewComponent},
            { path: 'events',component: ChapterEventsComponent},
            { path: 'feed',component: FeedComponent},
            { path: 'event/:id',component: EventDetailComponent },
            { path: 'chapter/:id',component: ChapterdetailsComponent},
        ]},
    { path: 'chapter' ,component: MainViewChapterComponent, children:[
            { path: '', redirectTo: '/chapter/feed', pathMatch: 'full'},
            { path: 'feed',component: FeedComponent},
            { path: 'profile',component: ChapterProfileComponent},
            { path: 'event/:id',component: EventDetailComponent },
            { path: 'chapters/:id',component: ChapterdetailsComponent},
            { path: 'chapters',component: ChaptersViewChComponent},
            { path: 'events',component: ChaptereventschComponent},
            { path: 'newEvent',component: CreateEventComponent}
        ]},
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
