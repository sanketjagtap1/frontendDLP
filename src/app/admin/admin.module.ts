import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { FormsModule } from '@angular/forms';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';


@NgModule({
  declarations: [DashboardComponent, AddTeacherComponent, ManageTeacherComponent, AllCoursesComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    IonicModule.forRoot(),
    FormsModule
  ]
})
export class AdminModule { }
