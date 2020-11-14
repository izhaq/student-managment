import { Component, OnInit } from '@angular/core';
import {zip} from 'rxjs';
import {Choice, ChoiceList} from '../../general-components/dropdown/dropdown.component';
import {StudentsStoreService} from '../../../services/students-store.service';
import {Student, Students} from '../../../models/Student';

@Component({
  selector: 'app-student-main-view',
  templateUrl: './student-main-view.component.html',
  styleUrls: ['./student-main-view.component.scss']
})
export class StudentMainViewComponent implements OnInit {

  years: ChoiceList = [];
  classTypes: ChoiceList = [];
  students: Students = [];
  tableHeader: Partial<Student> & { isDisable?: boolean } = { fname: 'Name', lname: 'S.Name', grade: 'Score', isDisable: true };
  selectedRow = '';
  constructor(private service: StudentsStoreService) { }

  ngOnInit(): void {
    this.service.getYears().subscribe( years => (this.years = years));
    this.service.getClassTypes().subscribe(classTypes => (this.classTypes = classTypes));
    this.service.getStudents().subscribe( students => (this.students = students));
  }

  onYearSelected({ code: year }): void{
    this.service.onSelectedYear(year);
  }

  onClassSelected({ code: classType }): void {
    this.service.onSelectedClassType(classType);
  }

  onSelectedRow(student: Student): void {
    this.selectedRow = student.fname;
  }

  onStudentUpdate(student: Partial<Student>): void {
    console.log(student);
  }

}
