import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-manage-lecture',
  templateUrl: './manage-lecture.component.html',
  styleUrls: ['./manage-lecture.component.scss'],
})
export class ManageLectureComponent implements OnInit {

  lectList:any;
  constructor(private teacherSrv: TeacherService,  private alertController: AlertController) { 
    this.getLect()
  }

  ngOnInit() {}

   // get all courses
   async getLect() {
    let obj={
      id: localStorage.getItem('id')
    }
    await this.teacherSrv.getLect(obj).subscribe({
      next: (result) => {
        console.log(result)
        this.lectList = result.courseList
      },
      error: (error) => {
        console.log(error)
      }
    })
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please Enter Lecture Details',
      // subHeader: name,
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
              // let obj = {
              //   courseId: id,
              //   lectDate: alertData[0],
              //   startTime: alertData[1],
              // }
                // console.log(obj);
                
                // this.addLect(obj)
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
        this.lectList = result.courseList
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
