import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { PostCreateComponent } from './components/post-create/post-create.component';
import { PostEditComponent } from './components/post-edit/post-edit.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { APP_BASE_HREF } from '@angular/common';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MainComponent } from './components/main/main.component';
import{CalendarHeaderComponent} from './components/dashboard/calendar-header.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
  declarations: [
    AppComponent,
    PostCreateComponent,
    PostEditComponent,
    PostListComponent,
    DashboardComponent,
    TopNavbarComponent,
    MainComponent,
    CalendarHeaderComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule.forRoot([
      { path: '', component: MainComponent},
        { path: 'dashboard', component: DashboardComponent}
      //]}
    ]),
    BrowserAnimationsModule,
    LayoutModule,
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory })
  ],
  providers: [{provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
