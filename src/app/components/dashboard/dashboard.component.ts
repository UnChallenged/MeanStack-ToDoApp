import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
  // handleDateClick(arg: any) {
  //   alert('date click! ' + arg.dateStr)
  // }
}
