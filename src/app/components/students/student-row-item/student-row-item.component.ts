import {Component, EventEmitter, Input, Output, OnInit} from '@angular/core';
import {Student} from '../../../models/Student';

@Component({
  selector: 'app-student-row-item',
  templateUrl: './student-row-item.component.html',
  styleUrls: ['./student-row-item.component.scss']
})
export class StudentRowItemComponent implements OnInit {

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
