import {Component, Input, OnInit} from '@angular/core';
import {Student} from '../../../models/Student';

@Component({
  selector: 'app-student-table-view',
  templateUrl: './student-table-view.component.html',
  styleUrls: ['./student-table-view.component.scss']
})
export class StudentTableViewComponent implements OnInit {

  @Input() student: Partial<Student>;
  selectedRow = '';
  constructor() { }

  ngOnInit(): void {
  }

}
