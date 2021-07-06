import { Component, OnInit, ViewChild } from '@angular/core';
import { CalendarEvent, CalendarView } from 'angular-calendar';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public selecteddate: any;
  view: CalendarView = CalendarView.Month;

  viewDate: Date = new Date();

  events: CalendarEvent[] = [];

  clickedDate!: Date;

  clickedColumn!: number;

  constructor() { }
  
  ngOnInit(): void {
    
  }
  
}

