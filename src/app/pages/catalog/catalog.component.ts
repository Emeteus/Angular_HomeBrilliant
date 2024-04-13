import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css'
})
export class CatalogComponent {
  ngOnInit(): void {
    document.title = 'Catalog | BrilliantHome'; // Установка нового названия вкладки
  }

}
