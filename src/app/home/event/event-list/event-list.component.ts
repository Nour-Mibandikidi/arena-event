import { Component } from '@angular/core';
import { EventService } from '../../../service/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss'],
})
export class EventListComponent {
  events: any[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit(): void {
    this.getAllEvents();
  }

  getAllEvents(): void {
    this.eventService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des évènements');
      }
    );
  }

  getAllEventsByCategorie(categorie: string) {
    this.eventService.getAllEventsByCategorie(categorie).subscribe((data) => {
      this.events = data;
    });
  }
}
