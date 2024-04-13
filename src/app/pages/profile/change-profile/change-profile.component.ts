import { Component } from '@angular/core';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrl: './change-profile.component.css'
})
export class ChangeProfileComponent {
  ngOnInit(): void {
    document.title = 'Change Profile | BrilliantHome'; // Установка нового названия вкладки
  }

}
