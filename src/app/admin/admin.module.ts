import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminMainComponent } from './admin-main/admin-main.component';
import { AuthGuard } from '../auth.guard';

@NgModule({
  declarations: [AdminMainComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: 'admin', component: AdminMainComponent, canActivate: [AuthGuard]},
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
