import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular'; // useful for typechecking


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    //dateClick: this.handleDateClick.bind(this),// bind is important!
    selectable: true,
    height: 550,
    select(info:any) {
    {
      alert('selected ' + info.startStr + ' to ' + info.endStr);
    }
    }
    
  };
  constructor() { }
  
  ngOnInit(): void {
    
  }
  // handleDateClick(arg: any) {
  //   alert('date click! ' + arg.dateStr)
  // }
}
