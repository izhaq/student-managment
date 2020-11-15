import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { getStudents } from './mock';
import {ClassRoomResponse, ClassRoom, ClassRooms, ClassTypes} from '../models/ClassRoom';
import {map} from 'rxjs/operators';
import {ChoiceList, resetSelectionCode} from '../components/general-components/dropdown/dropdown.component';
import {Student, Students} from '../models/Student';

interface Store{
  studentsOrig: Students;
  selectedYear: string;
  selectedClassType: string;
  students: BehaviorSubject<Students>;
  classRooms: BehaviorSubject<ClassRooms>;
  years: BehaviorSubject<ChoiceList>;
  classTypes: BehaviorSubject<ChoiceList>;
  viewMode: BehaviorSubject<string>;
}

type Filter = (data: any) => boolean;



@Injectable({
  providedIn: 'root'
})
export class StudentsStoreService {

  private store: Store;

  constructor() {
    this.init();
  }

  init(): void {
    this.store = {
      studentsOrig: [],
      selectedYear: resetSelectionCode,
      selectedClassType: resetSelectionCode,
      students: new BehaviorSubject<Students>([]),
      years: new BehaviorSubject<ChoiceList>([]),
      classTypes: new BehaviorSubject<ChoiceList>([]),
      viewMode: new BehaviorSubject<string>('table'),
      classRooms: new BehaviorSubject<ClassRooms>([])
    };
    this.fetchStudents().subscribe(response => {
      const students = this.createStudentsArray(response.classStudents);
      this.store.classRooms.next(response.classStudents);
      this.store.years.next([...this.createYearsArray(response.classStudents)]);
      this.store.classTypes.next([...this.createClassTypesArray(response.classTypes)]);
      this.store.students.next(students);
      this.store.studentsOrig = students;
    });
  }

  private createYearsArray(classRooms: ClassRooms): ChoiceList {
    let yearsMap = {};
    classRooms.forEach((classRoom) => {
      yearsMap = classRoom.students.reduce( (yearMap, student) =>
        (yearMap[student.year] ? yearMap : {[student.year]: student.year, ...yearMap}), yearsMap);
    });
    return this.buildChoiceList(yearsMap);
  }

  private buildChoiceList(mapObj: {}): ChoiceList {
    const choiceList: ChoiceList = [];
    Object.values(mapObj).forEach(value => choiceList.push({ code: value as string, value }));
    return choiceList;
  }

  private filterYears(year: string): void{
    const classTypes = this.store.classRooms.getValue().reduce((courseMap: {}, classRoom: ClassRoom ) => {
      const yearExist = classRoom.students.some( (student: Student) =>
        (year === resetSelectionCode || student.year === year) );
      return yearExist ? {[classRoom.classType]: classRoom.classType, ...courseMap} : courseMap;
    }, {});
    const courses: ChoiceList = this.buildChoiceList(classTypes);
    this.store.classTypes.next(courses);
  }

  private filterClassTypes(classType: string): void{
    const classRooms = this.store.classRooms.getValue().filter( classRoom =>
      (classType === resetSelectionCode || classRoom.classType === classType));
    const years = this.createYearsArray(classRooms);
    this.store.years.next(years);
  }

  private getStudentByClassTypeFilter = (classType: string): Filter => {
    return (classRoom: ClassRoom) => (classType === resetSelectionCode || classType === classRoom.classType);
  }

  private getStudentByYearFilter = (year: string): Filter => {
    return (student: Student) => (year === resetSelectionCode || year === student.year);
  }

  private filterStudents(classType: string, selectedYear: string): void {
    const classRooms = this.store.classRooms.getValue();
    const filteredStudent = this.createStudentsArray(
      classRooms,
      this.getStudentByClassTypeFilter(classType),
      this.getStudentByYearFilter(selectedYear)
    );
    this.store.students.next(filteredStudent);
  }

  private createStudentsArray(
    classRooms: ClassRooms, ...filters): Students {
    const [
      classTypeFilter = (classRoom?: ClassRoom) => true,
      studentFilter = (student?: Student) => true
    ] = filters;
    return classRooms
      .filter(classTypeFilter)
      .reduce((students, classRoom) =>
        [
          ...classRoom.students.filter(studentFilter),
          ...students],
        []
      );
  }

  private createClassTypesArray(types: ClassTypes): ChoiceList {
    return types.map(type => ({ code: type, value: type }));
  }

  private fetchStudents(): Observable<ClassRoomResponse> {
    return of(getStudents()).pipe(map(response => response as ClassRoomResponse));
  }

  onSelectedYear(selectedYear: string): void {
    this.store.selectedYear = selectedYear;
    this.filterYears(selectedYear);
    this.filterStudents(this.store.selectedClassType, selectedYear);
  }

  onSelectedClassType(classType: string): void {
    this.store.selectedClassType = classType;
    this.filterClassTypes(classType);
    this.filterStudents(classType, this.store.selectedYear);
  }

  onSwitchView(mode: string): void {
    const currentMode = this.store.viewMode.getValue();
    if (currentMode !== mode) {
      this.store.viewMode.next(mode);
    }
  }

  get classRoom(): Observable<Students> {
    return this.store.students.asObservable();
  }

  getYears(): Observable<ChoiceList> {
    return this.store.years.asObservable();
  }

  getClassTypes(): Observable<ChoiceList> {
    return this.store.classTypes.asObservable();
  }

  getStudents(): Observable<Students> {
    return this.store.students.asObservable();
  }

  get viewMode(): Observable<string> {
    return this.store.viewMode.asObservable();
  }
}
