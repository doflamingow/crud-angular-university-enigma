import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MajorRoutingModule } from './major-routing.module';
import { FormMajorComponent } from './form-major/form-major.component';
import { ListMajorComponent } from './list-major/list-major.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [FormMajorComponent, ListMajorComponent],
  imports: [
    CommonModule,
    MajorRoutingModule,
    ReactiveFormsModule
  ]
})
export class MajorModule { }
