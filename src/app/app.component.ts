import { Component, OnInit } from '@angular/core';
import { UsersService } from './services/users.service';
import { EventsService } from './services/events.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'arena-event';

  constructor(private eventSrv:EventsService){

  }

  ngOnInit(){
    this.eventSrv.getEventsById("3").subscribe(
      data => {
        console.log(data);
      }
    )
  }
}
