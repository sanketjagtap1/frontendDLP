import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule)
  },
  {
    path: 'admin',
    component: AdminComponent,
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminModule)
  },
  {
    path: 'teacher',
    component: TeacherComponent,
    loadChildren: () => import('./teacher/teacher.module').then( m => m.TeacherModule)
  },
  {
    path: 'student',
    component:StudentComponent,
    loadChildren: () => import('./student/student.module').then( m => m.StudentModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
