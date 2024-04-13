import {Component} from '@angular/core';
import {TranslateService} from "@ngx-translate/core";


// import "../../../assets/js/lang.js"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  ngOnInit(): void {
    document.title = 'BrilliantHome'; // Установка нового названия вкладки
  }

}
