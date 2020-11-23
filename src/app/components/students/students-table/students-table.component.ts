import { Component, OnInit } from '@angular/core';
import {Student, Students} from '../../../models/Student';
import {Observable} from 'rxjs';
import {StudentsStoreService} from '../../../services/students-store.service';

@Component({
  selector: 'app-students-table',
  templateUrl: './students-table.component.html',
  styleUrls: ['./students-table.component.scss']
})
export class StudentsTableComponent {

  tableHeader: Partial<Student> & { isDisable?: boolean } = { fname: 'Name', lname: 'S.Name', grade: 'Score', isDisable: true };
  constructor(private service: StudentsStoreService) { }

  get selectedStudent(): Observable<Student> {
    return this.service.getSelectedStudent();
  }

  get students(): Observable<Students> {
    return this.service.getStudents();
  }

  onStudentScoreUpdate(student: Partial<Student>): void {
    this.service.onStudentInfoUpdate(student);
  }

  onSelectedRow(student: Student): void {
    this.service.onSelectedStudent(student);
  }

}
