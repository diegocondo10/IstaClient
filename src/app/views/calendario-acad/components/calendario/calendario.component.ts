import { Component, OnInit } from '@angular/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.css']
})
export class CalendarioComponent implements OnInit {

  constructor() { }
  calendarPlugins = [dayGridPlugin]; // important!
  calendarEvents = [
    { title: 'event 1', date: '2019-04-01' }
  ];
  modifyTitle(eventIndex, newTitle) {
    this.calendarEvents[eventIndex].title = newTitle;
  }
  ngOnInit() {

  }


}
