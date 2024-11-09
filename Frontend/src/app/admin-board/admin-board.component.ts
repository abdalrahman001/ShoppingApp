import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent {
  title = 'Admin Board';
}
