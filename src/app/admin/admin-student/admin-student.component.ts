import { Component, OnInit } from '@angular/core';
import { StudentDataService } from 'src/app/student-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-student',
  templateUrl: './admin-student.component.html',
  styleUrls: ['./admin-student.component.css']
})
export class AdminStudentComponent implements OnInit {

  constructor(private dataService: StudentDataService, private router: Router) { }

  studentList: any = [];

  ngOnInit() {
    this.studentList = this.dataService.getAllStudents();
  }

  routeToAddPage() {
    console.log("here ");
    // console.log(this.router.navigate(['add']));
    this.router.navigate(['/admin','students','add']);
  }

}
