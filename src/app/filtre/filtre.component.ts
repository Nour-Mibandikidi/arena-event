import { Component, EventEmitter, Output } from '@angular/core';
import { FiltreService } from '../shared/service/filtre.service';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.scss'],
})
export class FiltreComponent {
  categories: any[] = [];
  @Output() categorySelected = new EventEmitter<string>();
  searchTerm: string = '';

  @Output() filterApplied = new EventEmitter<string>();
  filterValue: string = '';

  constructor(private filtreService: FiltreService) {}

  ngOnInit(): void {}

  filterEvents(selectedCategory: string): void {
    this.categorySelected.emit(selectedCategory);
  }
  applyFilter() {
    this.filterApplied.emit(this.searchTerm);
  }

  resetFilter() {
    this.filterValue = '';
    this.filterApplied.emit(this.filterValue);
  }
}
