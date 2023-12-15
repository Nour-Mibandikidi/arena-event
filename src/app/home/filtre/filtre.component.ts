import { Component, EventEmitter, Output } from '@angular/core';
import { FiltreService } from './filtre.service';

@Component({
  selector: 'app-filtre',
  templateUrl: './filtre.component.html',
  styleUrls: ['./filtre.component.scss'],
})
export class FiltreComponent {
  categories: any[] = [];
  @Output() categorySelected = new EventEmitter<string>();

  constructor(private filtreService: FiltreService) {}

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories(): void {
    this.filtreService.getCategories().subscribe(
      (data) => {
        this.categories = data;
      },
      (error) => {
        console.error('Erreur lors de la récupération des évènements');
      }
    );
  }

  filterEvents(selectedCategory: string): void {
    this.categorySelected.emit(selectedCategory);
  }
}
