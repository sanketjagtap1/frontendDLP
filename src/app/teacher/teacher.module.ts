import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeacherRoutingModule } from './teacher-routing.module';
import { TeacherComponent } from './teacher.component';
import { IonicModule } from '@ionic/angular';
import { SideMenuComponent } from '../helper/side-menu/side-menu.component';


@NgModule({
  declarations: [
    TeacherComponent,
    SideMenuComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    IonicModule.forRoot()
  ]
})
export class TeacherModule { }
