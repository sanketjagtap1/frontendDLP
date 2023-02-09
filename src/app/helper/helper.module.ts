import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelperRoutingModule } from './helper-routing.module';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [SideMenuComponent],
  imports: [
    CommonModule,
    HelperRoutingModule,
    IonicModule.forRoot()
  ],
  exports:[
    SideMenuComponent
  ]
})
export class HelperModule { }
