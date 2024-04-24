import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-change-profile',
  templateUrl: './change-profile.component.html',
  styleUrl: './change-profile.component.css'
})
export class ChangeProfileComponent implements OnInit {
  ngOnInit(): void {
    document.title = 'Change Profile | BrilliantHome'; // Set document title
  }

  imageElement(event: any): void {
    const image: HTMLImageElement | null = document.querySelector(".img-account-profile");

    if (image) {
      const file: File = event.target.files[0];
      const reader = new FileReader();

      reader.onload = (e: any) => {
        if (typeof e.target.result === 'string') {
          image.src = e.target.result;
        }
      };

      if (file) {
        reader.readAsDataURL(file);
      }
    }
  }
}
