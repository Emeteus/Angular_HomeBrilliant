import { Component, ElementRef, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service'; //



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(
      private elementRef: ElementRef,
      private translateService: TranslateService,
      private cookieService: CookieService // Ensure you use CookieService from 'ngx-cookie-service'
  ) {}

  ngOnInit() {
    if (typeof document !== 'undefined') {
      // Your header component logic here

      const dropdownButton = this.elementRef.nativeElement.querySelector('#dropdownButton');
      const loginLink = this.elementRef.nativeElement.querySelector('#loginLink');
      const registerLink = this.elementRef.nativeElement.querySelector('#registerLink');

      if (dropdownButton && loginLink && registerLink) {
        const toggleDropdown = () => {
          const dropdownContent = this.elementRef.nativeElement.querySelector("#dropdownContent");
          const displayStyle = window.getComputedStyle(dropdownContent).display;

          if (displayStyle === 'block') {
            dropdownContent.style.display = 'none';
          } else {
            closeOtherDropdowns();
            dropdownContent.style.display = 'block';
          }
        };

        const loginAction = () => {
          closeDropdown();
        };

        const registerAction = () => {
          closeDropdown();
        };

        const closeDropdown = () => {
          const dropdownContent = this.elementRef.nativeElement.querySelector("#dropdownContent");
          dropdownContent.style.display = 'none';
        };

        const closeOtherDropdowns = () => {
          const allDropdowns = this.elementRef.nativeElement.querySelectorAll('.dropdown');
          allDropdowns.forEach((dropdown: HTMLElement) => {
            if (dropdown.id !== 'loginDropdown') {
              const dropdownContent = dropdown.querySelector('.login-dropdown-content') as HTMLElement;
              dropdownContent.style.display = 'none';
            }
          });
        };

        dropdownButton.addEventListener('click', toggleDropdown);

        loginLink.addEventListener('click', loginAction);
        registerLink.addEventListener('click', registerAction);

        document.addEventListener('click', (event) => {
          const dropdown = this.elementRef.nativeElement.querySelector('#loginDropdown');
          const dropdownContent = this.elementRef.nativeElement.querySelector('#dropdownContent');
          if (!dropdown.contains(event.target) && !dropdownContent.contains(event.target)) {
            closeDropdown();
          }
        });
      } else {
        console.error("One or more elements not found.");
      }

      const hamburger = this.elementRef.nativeElement.querySelector(".hamburger");
      const header = this.elementRef.nativeElement.querySelector(".header");
      const body = this.elementRef.nativeElement.querySelector("body");

      if (hamburger && header && body) {
        hamburger.addEventListener("click", function () {
          header.classList.toggle("mobile");
          body.classList.toggle("hidden");

          if (body.classList.contains("hidden")) {
            body.style.overflow = 'hidden';
          } else {
            body.style.overflow = '';
          }
        });
      }
    }

    // Language initialization logic
    const savedLanguage = this.cookieService.get('selectedLanguage');
    const languageCode = savedLanguage || navigator.language || 'en';
    this.translateService.setDefaultLang(languageCode);
    this.translateService.use(languageCode);
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    this.cookieService.set('selectedLanguage', language);
  }
}