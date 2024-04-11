import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-full-page',
  templateUrl: './full-page.component.html',
  styleUrl: './full-page.component.css'
})
export class FullPageComponent implements OnInit{
  constructor() { }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      document.addEventListener("DOMContentLoaded", () => {
        const languageButton = document.getElementById("languageButton") as HTMLElement;
        const languageList = document.querySelector(".language-list") as HTMLElement;

        // Обработчик события клика по кнопке языка
        languageButton.addEventListener("click", (event) => {
          event.stopPropagation(); // Остановка всплытия события
          languageList.classList.toggle("active"); // Переключение класса для показа/скрытия списка
        });

        // Обработчик события клика в любом месте документа
        document.addEventListener("click", () => {
          languageList.classList.remove("active"); // Убираем активный класс, если клик произошел за пределами списка
        });

        // Обработчик события клика внутри списка языков
        languageList.addEventListener("click", (event) => {
          event.stopPropagation(); // Остановка всплытия события
        });
      });
    }
  }
}
