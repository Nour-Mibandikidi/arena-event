import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  filterValue: string = '';
  eventDataList: any[] = [];

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isUserConnected();
  }

  applyFilter(filterValue: string) {
    this.filterValue = filterValue;
  }

  onFilterApplied(searchTerm: string) {
    console.log('Filtrer avec le terme :', searchTerm);
  }
}
