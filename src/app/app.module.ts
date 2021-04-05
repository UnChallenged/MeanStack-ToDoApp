import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular'; // the main connector. must go first
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin
import interactionPlugin from '@fullcalendar/interaction'; // a plugin

import { AppComponent } from './app.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MainComponent } from './components/main/main.component';

FullCalendarModule.registerPlugins([ // register FullCalendar plugins
  dayGridPlugin,
  interactionPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostEditComponent,
    PostListComponent,
    DashboardComponent,
    TopNavbarComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FullCalendarModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent, pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent},
    ])
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
