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
    const savedLanguage = this.cookieService.get('selectedLanguage');
    const languageCode = savedLanguage || navigator.language || 'en';
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);

    // Initialize theme settings
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
        const body: HTMLElement = document.body;
        const main: HTMLElement | null = document.querySelector('main');
        const moonIcon: HTMLElement | null = document.querySelector('.moon-icon');
        const sunIcon: HTMLElement | null = document.querySelector('.sun-icon');
        const footer: HTMLElement | null = document.querySelector('footer');
        const toggleButton: HTMLElement | null = document.getElementById('toggleButton');

        // Apply theme styles based on saved theme or default to light theme
        const savedTheme: string = this.getCookie('theme');
        if (savedTheme === 'dark') {
          this.applyDarkTheme(body, main, moonIcon, sunIcon, footer);
        } else {
          this.applyLightTheme(body, main, moonIcon, sunIcon, footer);
        }

        // Toggle theme on button click
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
              this.setCookie('theme', 'dark', 365);
            } else {
              this.applyLightTheme(body, main, moonIcon, sunIcon, footer);
              this.setCookie('theme', 'light', 365);
            }
          });
        }
      });
    }
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    this.cookieService.set('selectedLanguage', language);
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

  // Function to set cookie
  private setCookie(name: string, value: string, days: number): void {
    const date: Date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires: string = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  // Function to get cookie value by name
  private getCookie(name: string): string {
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
}