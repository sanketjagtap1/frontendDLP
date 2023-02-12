import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, IonModal } from '@ionic/angular';
import { TeacherService } from '../teacher.service';
import { OverlayEventDetail } from '@ionic/core/components';

@Component({
  selector: 'app-manage-course',
  templateUrl: './manage-course.component.html',
  styleUrls: ['./manage-course.component.scss'],
})
export class ManageCourseComponent implements OnInit {
  @ViewChild(IonModal)
  modal!: IonModal;

  courseList:any;
  courseData:any;
  isModalOpen = false;
  name:any;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';

  constructor(private teacherSrv: TeacherService,  private alertController: AlertController) {
    this.getCourses()
   }

   getCourseData(id:any){
    let obj = {
      id: id
    }
    this.teacherSrv.getCourseData(obj).subscribe({
      next: (result)=>{
        console.log(result)
        this.courseData=result.allCourses
        this.isModalOpen = true;
      },
      error:(err)=>{
        console.log(err)
      }
    })
   }

   cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
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
                teacherId: localStorage.getItem('id'),
                title: alertData[0],
                lectDate: alertData[1],
                startTime: alertData[2],
              }
                console.log(obj);
                
                this.addLect(obj)
                this.getCourses()
            }
        }
    ],
      inputs: [
        {
          placeholder: 'Title',
          type:'text'
        },
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
