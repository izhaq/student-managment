import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-student-management',
  templateUrl: './student-management.component.html',
  styleUrls: ['./student-management.component.scss']
})
export class StudentManagementComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    minHeight: '250px'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
