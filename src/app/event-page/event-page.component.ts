import { Component, Input } from '@angular/core';
import { EventService } from '../shared/service/event.service';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-page',
  templateUrl: './event-page.component.html',
  styleUrls: ['./event-page.component.scss'],
})
export class EventPageComponent {
  events: any;

  //@Input() selectedEventId!: number;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private route: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    this.authService.isUserConnected();
    
    this.route.params.subscribe((params) => {
      this.getEventById( params['id']);
    });

  }

  getEventById(selectedEventId: number): void {
    this.eventService.getEventById(selectedEventId).subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des évènements');
      }
    );
  }
}
