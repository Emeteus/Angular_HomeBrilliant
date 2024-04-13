import { Component } from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  ngOnInit(): void {
    document.title = 'View | BrilliantHome'; // Установка нового названия вкладки
  }

}
