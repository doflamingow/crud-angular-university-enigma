import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'major',
    loadChildren: () => import('./major/major.module').then((m) => m.MajorModule)
  },
  {
    path: 'student',
    loadChildren: () => import('./student/student.module').then((m) => m.StudentModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MasterRoutingModule { }
