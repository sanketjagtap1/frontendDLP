import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { HelperModule } from '../helper/helper.module';
import { StudentComponent } from './student.component';
import { IonicModule } from '@ionic/angular';
import { AllCourseComponent } from './all-course/all-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JitsiComponent } from './jitsi/jitsi.component';


@NgModule({
  declarations: [DashboardComponent, StudentComponent, AllCourseComponent, JitsiComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    HelperModule,
    IonicModule.forRoot()
  ]
})
export class StudentModule { }
