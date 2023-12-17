import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //user: { id: number; username: string } | undefined;
  user: any;

  constructor(private http: HttpClient, private router: Router) {}

  addUser(user: User) {
    return this.http.post('http://localhost:8080/api/users', user);
  }

  login(user: User) {
    return this.http.post('http://localhost:8080/api/users/login', user);
  }

  logout() {
    this.user = undefined;
    localStorage.removeItem('user');
    localStorage.removeItem('isConnected');
    this.isUserConnected();
    this.router.navigate(['/login']);
  }

  saveUser() {
    localStorage.setItem('isConnected', 'true');
  }

  getSavedUser() {
    return localStorage.getItem('user');
  }

  isUserConnected() {
    const isConnected = localStorage.getItem('isConnected');
    if (isConnected) {
      return true;
    } else {
      return false;
    }
  }

  private getSavedUserInfo() {
    return this.http.get(
      'http://localhost:8080/api/users/?id=' + this.getSavedUser()
    );
  }
}
