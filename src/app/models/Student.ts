export interface Student {
  fname: string;
  lname: string;
  grade: string;
  year: string;
  id?: string;
  class?: string;
}

export type Students = Array<Student>;
