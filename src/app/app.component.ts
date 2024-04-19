import { Component, OnInit } from '@angular/core';
import {TranslateService} from "@ngx-translate/core";
import { CookieService } from 'ngx-cookie-service'; //


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'brillianthome';

  constructor(
      private translateService: TranslateService,
      private cookieService: CookieService
  ) {}

  ngOnInit() {
    // Initialize language settings
    let savedLanguage = this.cookieService.get('selectedLanguage');
    if (!savedLanguage) {
      savedLanguage = navigator.language || 'en';
      this.cookieService.set('selectedLanguage', savedLanguage, 365); // Сохраняем выбранный язык в куки на 365 дней
    }

    this.translateService.setDefaultLang(savedLanguage);
    this.translateService.use(savedLanguage);

    // Initialize theme settings
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = localStorage.getItem('theme');
        const body: HTMLElement = document.body;
        const main: HTMLElement | null = document.querySelector('main');
        const moonIcon: HTMLElement | null = document.querySelector('.moon-icon');
        const sunIcon: HTMLElement | null = document.querySelector('.sun-icon');
        const footer: HTMLElement | null = document.querySelector('footer');
        const toggleButton: HTMLElement | null = document.getElementById('toggleButton');

        if (savedTheme === 'dark') {
          this.applyDarkTheme(body, main, moonIcon, sunIcon, footer);
        } else {
          this.applyLightTheme(body, main, moonIcon, sunIcon, footer);
        }

        if (toggleButton) {
          toggleButton.addEventListener('click', () => {
            body.classList.toggle('dark');
            if (main) {
              main.classList.toggle('dark');
              main.classList.toggle('theme-dark');
            }
            const isDarkTheme: boolean = body.classList.contains('dark');
            if (isDarkTheme) {
              this.applyDarkTheme(body, main, moonIcon, sunIcon, footer);
              localStorage.setItem('theme', 'dark'); // Сохраняем тему в кеше браузера
            } else {
              this.applyLightTheme(body, main, moonIcon, sunIcon, footer);
              localStorage.setItem('theme', 'light'); // Сохраняем тему в кеше браузера
            }
          });
        }
      });
    }
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    this.cookieService.set('selectedLanguage', language, 365); // Сохраняем выбранный язык в куки на 365 дней
  }

  // Apply dark theme styles
  private applyDarkTheme(body: HTMLElement, main: HTMLElement | null, moonIcon: HTMLElement | null, sunIcon: HTMLElement | null, footer: HTMLElement | null): void {
    if (moonIcon) {
      moonIcon.style.display = 'none';
    }
    if (sunIcon) {
      sunIcon.style.display = 'block';
    }
    body.classList.add('dark');
    body.classList.add('theme-dark');
    if (main) {
      main.classList.add('dark');
      main.classList.add('theme-dark');
    }
    if (footer) {
      footer.style.background = '#111';
      footer.style.color = '#fff';
    }
  }

  // Apply light theme styles
  private applyLightTheme(body: HTMLElement, main: HTMLElement | null, moonIcon: HTMLElement | null, sunIcon: HTMLElement | null, footer: HTMLElement | null): void {
    if (moonIcon) {
      moonIcon.style.display = 'block';
    }
    if (sunIcon) {
      sunIcon.style.display = 'none';
    }
    body.classList.remove('dark');
    body.classList.remove('theme-dark');
    if (main) {
      main.classList.remove('dark');
      main.classList.remove('theme-dark');
    }
    if (footer) {
      footer.style.background = '';
      footer.style.color = '';
    }
  }
}