import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { FormStudentComponent } from './form-student/form-student.component';
import { ListStudentComponent } from './list-student/list-student.component';
import {ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [FormStudentComponent, ListStudentComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class StudentModule { }
