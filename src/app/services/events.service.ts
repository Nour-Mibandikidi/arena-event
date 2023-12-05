import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Events } from '../models/events.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  private apiUrl = "http://localhost:8080/api/events"

  constructor(private http: HttpClient) { }

  getAllEvents():Observable<Events[]>{
    return this.http.get<Events[]>(this.apiUrl);
  }

  getEventsById(eventId:string):Observable<Events>{
    return this.http.get<Events>(this.apiUrl+`/${eventId}`);
  }

  addEvents(event:Events):any{
    return this.http.post<any>(this.apiUrl,event);
  }

  updateEvents(eventId:string,updateEvent:any):any{
    return this.http.put<any>(this.apiUrl+`/${eventId}`,updateEvent);
  }

  deleteEvents(eventId:string):any{
    return this.http.delete<any>(this.apiUrl+`/${eventId}`);
  }
}
