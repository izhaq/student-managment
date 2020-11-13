import { Component } from '@angular/core';
import {StudentsStoreService} from './services/students-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'student-managment';
  constructor(service: StudentsStoreService) {
  }
}
