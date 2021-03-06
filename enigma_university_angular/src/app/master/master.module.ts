import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MasterRoutingModule } from './master-routing.module';
import { HomeComponent } from './home/home.component';
import { MasterComponent } from './master.component';


@NgModule({
  declarations: [HomeComponent, MasterComponent],
  imports: [
    CommonModule,
    MasterRoutingModule
  ]
})
export class MasterModule { }
