import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/student-data.service';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {

  constructor(private dataService: StudentDataService) { }

  studentList: any = [];

  ngOnInit() {
    this.studentList = this.dataService.getAllStudents();
  }

}
