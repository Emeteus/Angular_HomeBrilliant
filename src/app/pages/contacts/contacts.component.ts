import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  ngOnInit(): void {
    document.title = 'Contacts | BrilliantHome'; // Установка нового названия вкладки
  }

}
