import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  private isMobileMenuOpen: boolean = false;

  constructor(
      private elementRef: ElementRef,
      private translateService: TranslateService,
      private cookieService: CookieService
  ) { }

  ngOnInit() {
    this.setupHamburgerClick();
    this.initializeLanguage();
    this.setupDropdown();
  }

  private setupHamburgerClick() {
    this.elementRef.nativeElement.querySelector('.hamburger').addEventListener('click', () => {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
      this.toggleMobileMenu();
    });
  }

  private toggleMobileMenu() {
    const headerElement = document.querySelector<HTMLElement>('.header');
    if (headerElement) {
      headerElement.classList.toggle('mobile', this.isMobileMenuOpen);
    }
    const bodyElement = document.querySelector<HTMLElement>('body');
    if (bodyElement) {
      bodyElement.classList.toggle('hidden', this.isMobileMenuOpen);
      bodyElement.style.overflow = this.isMobileMenuOpen ? 'hidden' : '';
    }
  }

  @HostListener('window:resize')
  onWindowResize() {
    if (this.isMobileMenuOpen) {
      this.toggleMobileMenu();
    }
  }

  private initializeLanguage() {
    const savedLanguage = this.cookieService.get('selectedLanguage');
    const languageCode = savedLanguage || navigator.language || 'en';
    // this.translateService.setDefaultLang(languageCode);
    // this.translateService.use(languageCode);
  }

  switchLanguage(language: string) {
    this.translateService.use(language);
    this.cookieService.set('selectedLanguage', language);
  }

  private setupDropdown() {
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
  }
}
