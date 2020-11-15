export interface Student {
  fname: string;
  lname: string;
  grade: string;
  year: string;
  id?: string;
}

export type Students = Array<Student>;
