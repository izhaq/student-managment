import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Student} from '../../../models/Student';

@Component({
  selector: 'app-student-table-view',
  templateUrl: './student-table-view.component.html',
  styleUrls: ['./student-table-view.component.scss']
})
export class StudentTableViewComponent implements OnInit {

  @Input() student: Partial<Student> & { isDisable?: boolean };
  @Output() studentUpdate?: EventEmitter<Partial<Student>> = new EventEmitter<Partial<Student>>();
  constructor() { }

  ngOnInit(): void {
  }

  updateStudentScore(grade: string): void {
    this.student.grade = grade;
    this.studentUpdate.emit(this.student);
  }

}
