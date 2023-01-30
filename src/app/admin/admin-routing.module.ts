import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTeacherComponent } from './add-teacher/add-teacher.component';
import { AllCoursesComponent } from './all-courses/all-courses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageTeacherComponent } from './manage-teacher/manage-teacher.component';

const routes: Routes = [
  {path: '', component: DashboardComponent},
  {path: 'addTeacher', component: AddTeacherComponent},
  {path: 'manageTeacher', component: ManageTeacherComponent},
  {path: 'allCourses', component: AllCoursesComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
