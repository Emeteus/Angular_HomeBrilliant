import { Component } from '@angular/core';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrl: './error-page.component.css'
})
export class ErrorPageComponent {
  ngOnInit(): void {
    document.title = 'ERROR'; // Установка нового названия вкладки
  }

}
