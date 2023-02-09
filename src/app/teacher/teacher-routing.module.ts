import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageCourseComponent } from './manage-course/manage-course.component';
import { ManageLectureComponent } from './manage-lecture/manage-lecture.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'addCourse', component: AddCourseComponent},
  {path: 'manageCourse', component: ManageCourseComponent},
  {path: 'manageLect', component: ManageLectureComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
