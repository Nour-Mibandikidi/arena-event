import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl = "http://localhost:8080/api/users"

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<User[]>{
    return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(userId:string):Observable<User>{
    return this.http.get<User>(this.apiUrl+`/${userId}`);
  }

  addUser(user:User):any{
    return this.http.post<any>(this.apiUrl,user);
  }

  updateUser(userId:string,updateUser:any):any{
    return this.http.put<any>(this.apiUrl+`/${userId}`,updateUser);
  }

  deleteUser(userId:string):any{
    return this.http.delete<any>(this.apiUrl+`/${userId}`);
  }


}
