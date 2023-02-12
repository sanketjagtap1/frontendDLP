import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-all-courses',
  templateUrl: './all-courses.component.html',
  styleUrls: ['./all-courses.component.scss'],
})
export class AllCoursesComponent implements OnInit {
  courseList: any;
  constructor(private adminSrv: AdminService, private toastController: ToastController) { }

  ngOnInit() {
    this.getAllCourses();
  }

  // get all courses
  async getAllCourses() {
    await this.adminSrv.getCourseList().subscribe({
      next: (result) => {
        console.log(result)
        this.courseList = result.allCourses
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  async deleteCourse(id:any){
    let obj = {
      "id": id
    }
    await this.adminSrv.deleteCourse(obj).subscribe({
      next: (result)=>{
        console.log(result)
        this.presentToast(result.message, "success")
        this.getAllCourses()
      },
      error: (err) =>{
        console.log(err)
        this.presentToast(err.statusText, "Danger")
      }
    })
  }

  
  // toster
  async presentToast(message:any, color:any) {
    
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color: color
    });

    await toast.present();
  }

}
