import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/admin/admin.service';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {

  courseCount:any;
  lectCount:any;
  constructor(private teacherSrv: TeacherService) {
    this.getLectCount()
   }

  ngOnInit() {
    this.getCourseCount()
  }


  // get Course Count
  async getCourseCount(){
    let obj = {
      id: localStorage.getItem('id')
    }
    await this.teacherSrv.getCourseCount(obj).subscribe({
      next: (result)=>{
        console.log(result)
        this.courseCount=result.courseCount
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

  // get Course Count
  async getLectCount(){
    let obj = {
      id: localStorage.getItem('id')
    }
    await this.teacherSrv.getLectCount(obj).subscribe({
      next: (result)=>{
        console.log(result)
        this.lectCount=result.lectCount
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

}
