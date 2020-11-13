import {Students} from './Student';

export interface ClassRoom {
  students: Students;
  classType: ClassType.BIOLOGY | ClassType.CHEMISTRY | ClassType.COMPUTER_SCIENCE;
}

export enum ClassType {
  BIOLOGY = 'Biology',
  CHEMISTRY = 'Chemistry',
  COMPUTER_SCIENCE = 'ComputerScience'
}

export type ClassTypes = Array<ClassType>;

export type ClassRooms = Array<ClassRoom>;

export interface ClassRoomResponse {
  classStudents: ClassRooms;
  classTypes: ClassTypes;
}
