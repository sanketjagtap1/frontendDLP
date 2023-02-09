import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss'],
})
export class AddCourseComponent implements OnInit {
  color:any;

  constructor(private teacherSrv: TeacherService,private toastController: ToastController) { }

  ngOnInit() {}

  addCourse(data:any){
    console.log(data)
    data.teacherId=localStorage.getItem('id');
    console.log(data)
    this.teacherSrv.addCourse(data).subscribe({
      next:(result)=>{
        console.log(result)
        this.presentToast(result.message)
      },
      error: (error)=>{
        console.log(error)
        this.presentToast(error.statusText)
      }
    })
  }


  // toster
  async presentToast(message:any) {
    if(message=="success"){
      this.color = "success"
    }else{
      this.color = "danger"
    }
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'bottom',
      color: this.color
    });

    await toast.present();
  }

}
