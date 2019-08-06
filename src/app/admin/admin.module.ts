import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AuthGuard } from '../auth.guard';
import { AdminStudentComponent } from './admin-student/admin-student.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';

@NgModule({
  declarations: [AdminMainComponent, AdminStudentComponent, StudentAddComponent, StudentDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'admin', component: AdminMainComponent, canActivate: [AuthGuard]},
      {
        path: 'admin/students', 
        component: AdminStudentComponent,
        canActivate: [AuthGuard],
        children: [
          {
            path: 'add',
            component: StudentAddComponent
          },
        ]
      },

      // {
      //   path: 'products/:id', 
      //   component: ProductDetailComponent,
      //   canActivate: [AuthGuardService],
      //   children: [
      //     {
      //       path: '',
      //       redirectTo:'info',
      //       pathMatch: 'full'
      //     },
      //     {
      //       path: 'info',
      //       component: ProductEditInfoComponent
      //     },
      //     {
      //       path: 'tags',
      //       component: ProductEditTagsComponent,
      //     }
      //   ]
      // }
    ])
  ]
})
export class AdminModule { }
