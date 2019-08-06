import { Injectable } from '@angular/core';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentDataService {

  constructor() { }

  studentsList = [
    { "firstName":"Harry", "lastName":"Potter", "rollNo": "HVD201" },
    { "firstName":"John", "lastName":"Doe", "rollNo":"HVD202" },
    { "firstName":"Andrew", "lastName":"Smith", "rollNo":"HVD203" },
  ];

  addStudent(student: Student){
    this.studentsList.push(student);
    return this.studentsList;
  }

  removeStudent(rollNo : string){
    this.studentsList = this.studentsList.filter((student) => student.rollNo!=rollNo);
    return this.studentsList;
  }

  getAllStudents() {
    return this.studentsList;
  }

  getStudentByRollNo(rollNo: string) {
    return this.studentsList.find(student => student.rollNo == rollNo);
  }

}
