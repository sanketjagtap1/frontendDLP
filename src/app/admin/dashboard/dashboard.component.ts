import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  courseCount:any;
  teacherCount:any;
  studentCount:any;
  constructor(private adminSrv: AdminService,
    private router: Router,) {
      this.getCourseCount();
      this.getTeacherCount();
      this.getStudentCount();
    console.log(this.courseCount)
     }

  ngOnInit() {
    

  }


  // get course count
  async getCourseCount(){
    this.courseCount = await this.adminSrv.getCourseCount().subscribe({
      next: (result)=>{
        this.courseCount=result.courseCount;
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }
  // get course count
  async getTeacherCount(){
    this.courseCount = await this.adminSrv.getTeacherCount().subscribe({
      next: (result)=>{
        console.log(result)
        this.teacherCount=result.teacherCount;
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }
  // get course count
  async getStudentCount(){
    this.courseCount = await this.adminSrv.getStudentCount().subscribe({
      next: (result)=>{
        console.log(result)
        this.studentCount=result.studentCount;
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }
}
