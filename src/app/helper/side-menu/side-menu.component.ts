import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss'],
})
export class SideMenuComponent implements OnInit {
  userType: any;
  title = "Dashborad"
  routeObj: any;
  adminLink = [
    { name: 'Dashboard', link: '/admin' },
    { name: 'Add Teacher', link: 'addTeacher' },
    { name: 'Manage Teacher', link: 'manageTeacher' },
    { name: 'All Courses', link: 'allCourses' },
  ]

  teacherLink = [
    { name: 'Dashboard', link: '/teacher' },
    { name: 'Add Course', link: 'addCourse' },
    { name: 'Manage Course', link: 'manageCourse' },
    { name: 'All Lectures', link: 'manageLect' },
  ]


  studentLink = [
    { name: 'Explore Courses', link: '/student' },
    { name: 'Lecture', link: 'lect' },
  ]

  constructor(private router: Router) { }


  ngOnInit() {

    this.userType=localStorage.getItem('userType');
    
    // this.userType = '';

   
    console.log(this.userType)
    if (this.userType == "Admin") {
      this.routeObj = this.adminLink;
    } else if (this.userType == "Teacher"){
      console.log(this.userType)
      this.routeObj = this.teacherLink;
    }
    else if (this.userType == "Student"){
      this.routeObj = this.studentLink;
      console.log(this.userType)
    }



  }

  getHeader(title: any) {
    this.title = title;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
