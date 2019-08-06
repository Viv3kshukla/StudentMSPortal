import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StudentMainComponent } from '../student-main/student-main.component';
import { AuthGuard } from '../auth.guard';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'student', component: StudentMainComponent, canActivate: [AuthGuard]},
    ])
  ]
})
export class StudentModule { }
