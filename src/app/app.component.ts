import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { CookiePermissionDialogComponent } from './pages/cookie-permission-dialog/cookie-permission-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'brillianthome';

  constructor(
      private translateService: TranslateService,
      private cookieService: CookieService,
      private dialog: MatDialog
  ) {}

  ngOnInit() {
    // Initialize language settings
    let savedLanguage = this.cookieService.get('selectedLanguage');
    const DEFAULT_LANGUAGE = 'en'; // Default language

    if (!savedLanguage) {
      savedLanguage = navigator.language || DEFAULT_LANGUAGE;
      this.cookieService.set('selectedLanguage', savedLanguage, 365);
    }

    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);

    // Use the loaded language or fallback to default language if the translation file doesn't exist
    this.translateService.setDefaultLang(DEFAULT_LANGUAGE);
    this.translateService.use(savedLanguage).subscribe({
      next: () => {
        console.log(`Translation file for ${savedLanguage} found and loaded successfully.`);
      },
      error: () => {
        console.warn(`Translation file for ${savedLanguage} not found. Falling back to ${DEFAULT_LANGUAGE}.`);
        this.translateService.use(DEFAULT_LANGUAGE);
      }
    });



    // Initialize theme settings
    if (typeof document !== 'undefined') {
      document.addEventListener('DOMContentLoaded', () => {
        const savedTheme = this.cookieService.get('theme');
        const body: HTMLElement = document.body;
        const main: HTMLElement | null = document.querySelector('main');
        const moonIcon: HTMLElement | null = document.querySelector('.moon-icon');
        const sunIcon: HTMLElement | null = document.querySelector('.sun-icon');
        const footer: HTMLElement | null = document.querySelector('footer');
        const toggleButton: HTMLElement | null = document.getElementById('toggleButton');

        if (savedTheme) {
          this.setTheme(savedTheme, body, main, moonIcon, sunIcon, footer);
          if (savedTheme === 'dark') {
            this.showMoonIcon(moonIcon, sunIcon);
          } else {
            this.showSunIcon(moonIcon, sunIcon);
          }
        } else {
          // If no theme is saved, default to light theme
          this.setTheme('light', body, main, moonIcon, sunIcon, footer);
          this.showSunIcon(moonIcon, sunIcon);
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
              this.setTheme('dark', body, main, moonIcon, sunIcon, footer);
              this.showMoonIcon(moonIcon, sunIcon);
            } else {
              this.setTheme('light', body, main, moonIcon, sunIcon, footer);
              this.showSunIcon(moonIcon, sunIcon);
            }
          });
        }
      });
    }

    // Check if the cookie permission dialog needs to be shown
    if (!this.cookieService.get('cookiePermission')) {
      this.showCookiePermissionDialog();
    }
  }

  switchLanguage(language: string) {
    this.translateService.use(language).subscribe(() => {
      this.cookieService.set('selectedLanguage', language, 365);
    });
  }

  private setTheme(theme: string, body: HTMLElement, main: HTMLElement | null, moonIcon: HTMLElement | null, sunIcon: HTMLElement | null, footer: HTMLElement | null): void {
    if (theme === 'dark') {
      this.applyDarkTheme(body, main, moonIcon, sunIcon, footer);
    } else {
      this.applyLightTheme(body, main, moonIcon, sunIcon, footer);
    }
    this.cookieService.set('theme', theme, 365); // Save theme to cookie
  }

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

  private showMoonIcon(moonIcon: HTMLElement | null, sunIcon: HTMLElement | null): void {
    if (moonIcon) {
      moonIcon.style.display = 'block';
    }
    if (sunIcon) {
      sunIcon.style.display = 'none';
    }
  }

  private showSunIcon(moonIcon: HTMLElement | null, sunIcon: HTMLElement | null): void {
    if (moonIcon) {
      moonIcon.style.display = 'none';
    }
    if (sunIcon) {
      sunIcon.style.display = 'block';
    }
  }

  private showCookiePermissionDialog(): void {
    const dialogRef = this.dialog.open(CookiePermissionDialogComponent);
    dialogRef.afterClosed().subscribe(allow => {
      if (allow) {
        this.cookieService.set('cookiePermission', 'true', 365); // Save cookie permission to cookie

        let savedLanguage = this.cookieService.get('selectedLanguage');
        const DEFAULT_LANGUAGE = 'en'; // Define default language
        if (!savedLanguage) {
          savedLanguage = navigator.language || DEFAULT_LANGUAGE;
          this.cookieService.set('selectedLanguage', savedLanguage, 365);
        }
        this.switchLanguage(savedLanguage); // Set default language
      }
    });
  }
}
