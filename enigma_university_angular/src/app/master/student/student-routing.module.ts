import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListStudentComponent} from './list-student/list-student.component';
import {FormStudentComponent} from './form-student/form-student.component';

const routes: Routes = [
  {
    path: '',
    component: ListStudentComponent
  },
  {
    path: 'form',
    component: FormStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
