import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import { getStudents } from './mock';
import {ClassRoomResponse, ClassRoom, ClassRooms, ClassTypes} from '../models/ClassRoom';
import {map} from 'rxjs/operators';
import {ChoiceList, resetSelectionCode} from '../components/general-components/dropdown/dropdown.component';
import {Student, Students} from '../models/Student';

interface Store{
  studentsOrig: Students;
  students: BehaviorSubject<Students>;
  classRooms: BehaviorSubject<ClassRooms>;
  years: BehaviorSubject<ChoiceList>;
  classTypes: BehaviorSubject<ChoiceList>;
  viewMode: BehaviorSubject<string>;
}



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
      students: new BehaviorSubject<Students>([]),
      years: new BehaviorSubject<ChoiceList>([]),
      classTypes: new BehaviorSubject<ChoiceList>([]),
      viewMode: new BehaviorSubject<string>('details'),
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

  createStudentsArray(classRooms: ClassRooms): Students {
    return classRooms.reduce((students, classRoom) => [...classRoom.students, ...students], []);
  }

  createClassTypesArray(types: ClassTypes): ChoiceList {
    return types.map(type => ({ code: type, value: type }));
  }

  fetchStudents(): Observable<ClassRoomResponse> {
    return of(getStudents()).pipe(map(response => response as ClassRoomResponse));
  }

  onNewYear(selectedYear: string): void {
    const classTypes = this.store.classRooms.getValue().reduce((courseMap: {}, classRoom: ClassRoom ) => {
      const yearExist = classRoom.students.some( (student: Student) =>
        (selectedYear === resetSelectionCode || student.year === selectedYear) );
      return yearExist ? {[classRoom.classType]: classRoom.classType, ...courseMap} : courseMap;
    }, {});
    const courses: ChoiceList = this.buildChoiceList(classTypes);
    this.store.classTypes.next(courses);
    this.onFilterStudentByYear(selectedYear);
  }

  onNewClassType(classType: string): void {
    const classRooms = this.store.classRooms.getValue().filter( classRoom =>
      (classType === resetSelectionCode || classRoom.classType === classType));
    const years = this.createYearsArray(classRooms);
    this.store.years.next(years);
  }

  onFilterStudentByYear(selectedYear: string): void{
    const filteredStudent = this.store.studentsOrig.filter((student) =>
      (selectedYear === resetSelectionCode || selectedYear === student.year));
    this.store.students.next(filteredStudent);
  }

  onSwitchView(): void {
    if (this.store.viewMode.value === 'details') {
      this.store.viewMode.next('table');
    } else {
      this.store.viewMode.next('details');
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
