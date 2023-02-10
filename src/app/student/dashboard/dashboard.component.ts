import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lectList:any;
  constructor(private studentServ: StudentService, private router: Router) { 
    this.getLect()
  }

  ngOnInit() {}

  // get all lecture assign to this student
  getLect(){
    let obj={
      "studentId": localStorage.getItem('id')
  }
    this.studentServ.getLect(obj).subscribe({
      next:(result)=>{
        console.log(result)
        this.lectList=result.lectData
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }


  join(id:any){
    localStorage.setItem('meetingId', id);

    const obj = {
      "lectId": id,
      "studentId": localStorage.getItem('id')
  }
  this.studentServ.joinLect(obj).subscribe({
    next:(result)=>{
      console.log(result)
      this.router.navigate(['student/join']);
    },
    error:(error)=>{
      console.log(error)
    }
  })
  
  }
}
