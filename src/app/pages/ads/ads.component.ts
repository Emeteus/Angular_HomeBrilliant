import { Component } from '@angular/core';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrl: './ads.component.css'
})
export class AdsComponent {
  constructor() { }

  ngOnInit(): void {
    document.title = 'ADD | BrilliantHome'; // Установка нового названия вкладки
  }

}
