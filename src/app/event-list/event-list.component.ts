import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../shared/service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent implements OnInit, OnChanges {
  @Input() filterValue: string = '';
  events: any[] = [];
  filteredEvents: any[] = [];

  constructor(private eventService: EventService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.filterValue);
    if (changes['filterValue']) {
      this.filterEvents();
    }
  }

  ngOnInit(): void {
    this.getAllEvents();
  }

  filterEvents() {
    if (this.filterValue == '' || undefined) {
      this.filteredEvents = this.events;
    } else {
      this.filteredEvents = this.events.filter((event) =>
        event.name.toLowerCase().includes(this.filterValue)
      );
    }
  }

  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
        this.filteredEvents = data;
        console.log(this.events);
      },
      (error) => {
        console.error('Erreur lors de la récupération des évènements');
      }
    );
  }

  selectEvent(event:any) {
    this.router.navigate(["/eventPage",event.id])
  }
}
