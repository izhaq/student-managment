import { Component, OnInit } from '@angular/core';
import {AngularEditorConfig} from '@kolkov/angular-editor';
import {Observable} from 'rxjs';
import {StudentsStoreService} from '../../../services/students-store.service';
import {Student} from '../../../models/Student';

@Component({
  selector: 'app-student-edit-view',
  templateUrl: './student-edit-view.component.html',
  styleUrls: ['./student-edit-view.component.scss']
})
export class StudentEditViewComponent implements OnInit {

  editorConfig: AngularEditorConfig = {
    minHeight: '250px'
  };
  constructor(private service: StudentsStoreService) { }

  ngOnInit(): void {
  }

  get view(): Observable<string> {
    return this.service.viewMode;
  }

  get selectedStudent(): Observable<Student> {
    return this.service.getSelectedStudent();
  }

  onStudentScoreUpdate(student: Partial<Student>): void {
    console.log(student);
  }

}
