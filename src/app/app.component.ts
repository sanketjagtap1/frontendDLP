import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  userType:any;
  constructor() {
    this.userType=localStorage.getItem('userType');
    console.log(this.userType)
  }
}
