import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../../models/events.model';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get<Events[]>('http://localhost:8080/api/events');
  }

  getEventById(id: number) {
    return this.http.get('http://localhost:8080/api/events/' + id);
  }

  getAllEventsByCategorie(categorie: string) {
    return this.http.get<[]>('http://localhost:8080/api/events/' + categorie);
  }

  getEventsByUser(id?: number) {
    return this.http.get<[]>(
      'http://localhost:8080/api/user/' + id + '/events/'
    );
  }
}
