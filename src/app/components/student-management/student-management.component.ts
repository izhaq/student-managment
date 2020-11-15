import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import {StudentsStoreService} from '../../services/students-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    minHeight: '250px'
  };

  constructor(private service: StudentsStoreService) { }

  ngOnInit(): void {
  }

  get view(): Observable<string> {
    return this.service.viewMode;
  }

}
