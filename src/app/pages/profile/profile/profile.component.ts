import { Component } from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    standalone: true,
    imports: [
        TranslateModule
    ],
    styleUrl: './profile.component.css'
})
export class ProfileComponent {
  ngOnInit(): void {
    document.title = 'Profile | BrilliantHome'; // Установка нового названия вкладки
  }


}
