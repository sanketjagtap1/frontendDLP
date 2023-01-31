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
    { name: 'Dashboard', link: '' },
    { name: 'Add Teacher', link: 'admin/addTeacher' },
    { name: 'Manage Teacher', link: 'admin/manageTeacher' },
    { name: 'All Courses', link: 'admin/allCourses' },
  ]

  teacherLink = [
    { name: 'Dashboard', link: '' },
    { name: 'Add Course', link: 'teacher/addCourse' },
    { name: 'Manage Course', link: 'teacher/manageCourse' },
    { name: 'All Lectures', link: 'teacher/manageLect' },
  ]


  studentLink = [
    { name: 'Dashboard', link: '' },
    { name: 'Explore Courses', link: 'student/explore' },
    { name: 'Profile', link: 'student/profile' },
  ]

  constructor(private router: Router) {
    this.userType = localStorage.getItem('userType');
    console.log(this.userType)
    if (this.userType == "Admin") {
      this.routeObj = this.adminLink;
    } else if (this.userType == "Teacher") {
      console.log(this.userType)
      this.routeObj = this.teacherLink;
    }
    else if (this.userType == "Student") {
      this.routeObj = this.studentLink;
      console.log(this.userType)
    }
  }


  ngOnInit() {



    // this.userType = '';






  }

  getHeader(title: any) {
    this.title = title;
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }

}
