import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'brillianthome';

  // Add your document related TypeScript code here
  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', function () {
        const body: HTMLElement = document.body;
        const main: HTMLElement | null = document.querySelector('main');
        const moonIcon: HTMLElement | null = document.querySelector('.moon-icon');
        const sunIcon: HTMLElement | null = document.querySelector('.sun-icon');
        const footer: HTMLElement | null = document.querySelector('footer');
        const toggleButton: HTMLElement | null = document.getElementById('toggleButton');

        // Apply theme styles based on saved theme or default to light theme
        const savedTheme: string = getCookie('theme');
        if (savedTheme === 'dark') {
          applyDarkTheme();
        } else {
          applyLightTheme();
        }

        // Apply dark theme styles
        function applyDarkTheme(): void {
          if (moonIcon) {
            moonIcon.style.display = 'none';
          }
          if (sunIcon) {
            sunIcon.style.display = 'block';
          }
          body.classList.add('dark');
          body.classList.add('theme-dark'); // Добавляем класс theme-dark к body
          if (main) {
            main.classList.add('dark');
            main.classList.add('theme-dark'); // Добавляем класс theme-dark к main
          }
          if (footer) {
            footer.style.background = '#111';
            footer.style.color = '#fff';
          }
        }

        // Apply light theme styles
        function applyLightTheme(): void {
          if (moonIcon) {
            moonIcon.style.display = 'block';
          }
          if (sunIcon) {
            sunIcon.style.display = 'none';
          }
          body.classList.remove('dark');
          body.classList.remove('theme-dark'); // Удаляем класс theme-dark из body
          if (main) {
            main.classList.remove('dark');
            main.classList.remove('theme-dark'); // Удаляем класс theme-dark из main
          }
          if (footer) {
            footer.style.background = '';
            footer.style.color = '';
          }
        }

        // Toggle theme on button click
        if (toggleButton) {
          toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark');
            if (main) {
              main.classList.toggle('dark');
              main.classList.toggle('theme-dark'); // Тогглим класс theme-dark у main
            }
            const isDarkTheme: boolean = body.classList.contains('dark');
            if (isDarkTheme) {
              applyDarkTheme();
              setCookie('theme', 'dark', 365);
            } else {
              applyLightTheme();
              setCookie('theme', 'light', 365);
            }
          });
        }

        // Функция для установки cookie
        function setCookie(name: string, value: string, days: number): void {
          const date: Date = new Date();
          date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
          const expires: string = "expires=" + date.toUTCString();
          document.cookie = name + "=" + value + ";" + expires + ";path=/";
        }

        // Функция для получения значения cookie по имени
        function getCookie(name: string): string {
          const cname: string = name + "=";
          const decodedCookie: string = decodeURIComponent(document.cookie);
          const ca: string[] = decodedCookie.split(';');
          for (let i = 0; i < ca.length; i++) {
            let c: string = ca[i];
            while (c.charAt(0) === ' ') {
              c = c.substring(1);
            }
            if (c.indexOf(cname) === 0) {
              return c.substring(cname.length, c.length);
            }
          }
          return "";
        }
      });
    }
  }
}
