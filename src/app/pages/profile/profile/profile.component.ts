import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  standalone: true,
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  ngOnInit(): void {
    document.title = 'Profile | BrilliantHome'; // Установка нового названия вкладки
  }


}
