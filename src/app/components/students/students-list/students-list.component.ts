import { Component, OnInit } from '@angular/core';
import {Student, Students} from '../../../models/Student';
import {StudentsStoreService} from '../../../services/students-store.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss']
})
export class StudentsListComponent{
  constructor(private service: StudentsStoreService) { }

  get students(): Observable<Students> {
    return this.service.getStudents();
  }

  get selectedStudent(): Observable<Student> {
    return this.service.getSelectedStudent();
  }

  onStudentScoreUpdate(student: Partial<Student>): void {
    this.service.onStudentInfoUpdate(student);
  }

  onSelectedRow(student: Student): void {
    this.service.onSelectedStudent(student);
  }

}
