import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if (typeof document !== 'undefined') {
      if (document.readyState === 'complete') {
        this.initSlider();
      } else {
        document.addEventListener('DOMContentLoaded', this.initSlider);
      }
    }
  }

  initSlider(): void {
    const slider: SliderElement | null = document.querySelector('.slider');
    if (!slider) {
      console.error("Слайдер не найден.");
      return;
    }
    const slides: NodeListOf<HTMLElement> = document.querySelectorAll('.slide');
    const prevBtn: HTMLElement | null = document.querySelector('.prev');
    const nextBtn: HTMLElement | null = document.querySelector('.next');

    if (!prevBtn || !nextBtn) {
      console.error("Кнопки 'prev' или 'next' не найдены.");
      return;
    }

    let currentIndex: number = 0;

    function showSlide(index: number): void {
      if (index < 0) {
        currentIndex = slides.length - 1;
      } else if (index >= slides.length) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      const translateValue: string = `-${currentIndex * 100}%`;
      if (slider) {
        slider.style.transform = `translateX(${translateValue})`;
      }
    }

    function nextSlide(): void {
      showSlide(currentIndex + 1);
    }

    function prevSlide(): void {
      showSlide(currentIndex - 1);
    }

    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    setInterval(nextSlide, 5000); // автоматическое перелистывание каждые 10 секунд
  }
}

interface SliderElement extends Element {
  style: {
    transform: string;
  };
}

