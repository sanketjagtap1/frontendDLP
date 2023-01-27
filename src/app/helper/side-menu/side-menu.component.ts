import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  userType:any;
  title="Dashborad"
  constructor(private router: Router) { }


  ngOnInit() {
    
    this.userType=localStorage.getItem('userType');
    console.log(this.userType)
  }

  getHeader(title:any){
    this.title=title;
  }

  logout(){
    localStorage.clear();
    this.router.navigate(['']);
  }

}
