import { Component, OnInit } from '@angular/core';
import {Observable, zip} from 'rxjs';
import {Choice, ChoiceList} from '../../general-components/dropdown/dropdown.component';
import {StudentsStoreService} from '../../../services/students-store.service';
import {Student, Students} from '../../../models/Student';

@Component({
  selector: 'app-student-main-view',
  templateUrl: './student-main-view.component.html',
  styleUrls: ['./student-main-view.component.scss']
})
export class StudentMainViewComponent implements OnInit {

  view = '';
  constructor(private service: StudentsStoreService) { }

  ngOnInit(): void {
    this.service.viewMode.subscribe(view => this.view = view);
  }

  get years(): Observable<ChoiceList> {
    return this.service.getYears();
  }

  get classTypes(): Observable<ChoiceList> {
    return this.service.getClassTypes();
  }

  onYearSelected({ code: year }): void{
    this.service.onSelectedYear(year);
  }

  onClassSelected({ code: classType }): void {
    this.service.onSelectedClassType(classType);
  }

  onSelectedRow(student: Student): void {
    this.service.onSelectedStudent(student);
  }

  onStudentScoreUpdate(student: Partial<Student>): void {
    console.log(student);
  }

  onSwitchView(mode: string): void {
    this.service.onSwitchView(mode);
  }
}
