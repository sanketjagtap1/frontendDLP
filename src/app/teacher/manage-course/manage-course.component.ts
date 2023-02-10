import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss'],
})
export class ManageCourseComponent implements OnInit {

  courseList:any;

  constructor(private teacherSrv: TeacherService,  private alertController: AlertController) {
    this.getCourses()
   }
 
  ngOnInit() {}

  // get all courses
  async getCourses() {
    let obj={
      id: localStorage.getItem('id')
    }
    await this.teacherSrv.getCourseList(obj).subscribe({
      next: (result) => {
        console.log(result)
        this.courseList = result.courseList
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

  

  async presentAlert(id:any, name:any) {
    const alert = await this.alertController.create({
      header: 'Add Lecture',
      subHeader: name,
      buttons: [
        {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
            }
        }, 
        {
            text: 'Schedule',
            handler: (alertData) => { //takes the data 
              let obj = {
                courseId: id,
                lectDate: alertData[0],
                startTime: alertData[1],
              }
                console.log(obj);
                
                this.addLect(obj)
            }
        }
    ],
      inputs: [
        {
          placeholder: 'Date',
          type:'date'
        },
        {
          placeholder: 'Time',
          type:'time'
          
        },
        
      ],
    });

    await alert.present();
  }

  async addLect(obj:any) {
    
    await this.teacherSrv.addLect(obj).subscribe({
      next: (result) => {
        console.log(result)
        this.courseList = result.courseList
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
