import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    const items = this.elementRef.nativeElement.querySelectorAll(".accordion button");

    function toggleAccordion(this: HTMLElement) {
      const itemToggle = this.getAttribute('aria-expanded');

      for (let i = 0; i < items.length; i++) {
        (items[i] as HTMLElement).setAttribute('aria-expanded', 'false');
      }

      if (itemToggle === 'false') {
        this.setAttribute('aria-expanded', 'true');
      }
    }

    items.forEach((item: HTMLElement) => item.addEventListener('click', toggleAccordion.bind(item)));
  }
}

