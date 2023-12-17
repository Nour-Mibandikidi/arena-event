import { Component } from '@angular/core';
import { EventService } from '../shared/service/event.service';
import { AuthService } from '../auth/auth.service';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  AllEvents: any[] = [];
  EventsPast: any[] = [];
  EventsFuture: any[] = [];
  user: any;

  constructor(
    private eventService: EventService,
    private authService: AuthService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.authService.isUserConnected();
    this.getUserInfo();
    this.getAllEventsByUser();
  }

  getUserInfo() {
    this.userService
      .getUserById(this.authService.user?.id)
      .subscribe((data) => {
        this.user = data;
      });
  }

  getAllEventsByUser(): void {
    this.eventService
      .getEventsByUser(this.authService.user?.id)
      .subscribe((data) => {
        this.AllEvents = data;
        this.filterEvents();
      });
  }

  filterEvents(): void {
    const currentDate = new Date();

    this.EventsPast = this.AllEvents.filter(
      (event) => new Date(event.date) < currentDate
    );

    this.EventsFuture = this.AllEvents.filter(
      (event) => new Date(event.date) >= currentDate
    );
  }

  get getUsername() {
    return this.authService.user?.username || '';
  }
}
