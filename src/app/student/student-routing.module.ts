import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllCourseComponent } from './all-course/all-course.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JitsiComponent } from './jitsi/jitsi.component';

const routes: Routes = [
  {path: '', component: AllCourseComponent},
  {path: 'lect', component: DashboardComponent},
  {path: 'join', component: JitsiComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
