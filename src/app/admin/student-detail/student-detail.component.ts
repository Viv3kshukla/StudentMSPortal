import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from 'src/app/student';
import { StudentDataService } from 'src/app/student-data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.component.html',
  styleUrls: ['./student-detail.component.css']
})
export class StudentDetailComponent implements OnInit {

  constructor(private router:Router,
    private route: ActivatedRoute,
    private dataService:StudentDataService, 
    private formBuilder: FormBuilder) { }
  
  rollParam:string;
  student:Student;
  editPage: boolean = false;
  editForm: FormGroup;

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      this.rollParam = params.get('rollNo');
    });

    this.student = this.dataService.getStudentByRollNo(this.rollParam);
  }

  goBack() {
    this.router.navigate(['/admin','students']);
  }

  deleteStudent() {
    this.dataService.removeStudent(this.rollParam);
    this.router.navigate(['/admin','students']);
  }

  editStudent() {
    this.editForm = this.formBuilder.group({
      rollNo: [this.student.rollNo,Validators.required],
      firstName: [this.student.firstName,Validators.required],
      lastName: [this.student.lastName,Validators.required],
    });
    this.editPage = true;
    console.log('logging out the edit page ', this.editPage);
    // this.dataService.updateStudent();
  }

  onSubmit() {
    this.editPage = false;
    this.student = this.dataService.updateStudent(this.editForm.value);
  }

}
