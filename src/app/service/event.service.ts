// data.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get<[]>('http://localhost:3000/events');
  }

  getEventById(id: number) {
    return this.http.get('http://localhost:3000/events/' + id);
  }

  getAllEventsByCategorie(categorie: string) {
    return this.http.get<[]>('http://localhost:3000/events/' + categorie);
  }

  getEventsByUser(id?: number) {
    return this.http.get<[]>('http://localhost:3000/user/' + id + '/events/');
  }
}
