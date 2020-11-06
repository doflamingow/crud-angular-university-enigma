import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListMajorComponent} from './list-major/list-major.component';
import {FormMajorComponent} from './form-major/form-major.component';

const routes: Routes = [
  {
    path: '',
    component: ListMajorComponent
  },
  {
    path: 'form',
    component: FormMajorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MajorRoutingModule { }
