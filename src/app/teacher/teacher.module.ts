import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { IonicModule } from '@ionic/angular';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageLectureComponent } from './manage-lecture/manage-lecture.component';
import { FormsModule } from '@angular/forms';
import { TeacherComponent } from './teacher.component';
import { HelperModule } from '../helper/helper.module';


@NgModule({
  declarations: [TeacherComponent, DashboardComponent, AddCourseComponent, ManageCourseComponent, ManageLectureComponent],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    IonicModule.forRoot(),
    FormsModule,
    HelperModule
  ]
})
export class TeacherModule { }
