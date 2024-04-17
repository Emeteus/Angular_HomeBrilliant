import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent implements OnInit {
  ngOnInit(): void {
    document.title = 'View | BrilliantHome';
  }

}
