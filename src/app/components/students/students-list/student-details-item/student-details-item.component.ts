import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Student} from '../../../../models/Student';

@Component({
  selector: 'app-student-details-item',
  templateUrl: './student-details-item.component.html',
  styleUrls: ['./student-details-item.component.scss']
})
export class StudentDetailsItemComponent implements OnInit {

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
