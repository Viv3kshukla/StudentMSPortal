import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { StudentDataService } from 'src/app/student-data.service';
import { Student } from 'src/app/student';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.css']
})
export class StudentAddComponent implements OnInit {

  constructor(private formsBuilder: FormBuilder, private dataService: StudentDataService) { }

  studentForm: FormGroup;
  private newStudent: any;

  ngOnInit() {
    this.studentForm = this.formsBuilder.group({
      rollNo: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });
  }

  getFormControls() { return this.studentForm.controls; }

  addStudent () {
    this.newStudent = new Student(this.studentForm.value);
    console.log(this.newStudent);
    this.dataService.addStudent(this.newStudent);
  }

}
