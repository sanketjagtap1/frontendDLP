import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit {
  courseList:any;
  constructor(private adminSrv: AdminService) { }

  ngOnInit() {
    this.getAllCourses();
  }

  // get all courses
  async getAllCourses(){
await this.adminSrv.getCourseList().subscribe({
  next: (result)=>{
    console.log(result)
    this.courseList=result.allCourses
  },
  error: (error)=>{
    console.log(error)
  }
})
  }

}
