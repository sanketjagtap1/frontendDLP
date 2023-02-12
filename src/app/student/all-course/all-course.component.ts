import { Component, OnInit } from '@angular/core';
import { RequiredValidator } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { AdminService } from 'src/app/admin/admin.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-all-course',
  templateUrl: './all-course.component.html',
  styleUrls: ['./all-course.component.scss'],
})
export class AllCourseComponent implements OnInit {
  courseList:any;
  constructor(private adminServ: AdminService, private studentServ: StudentService, private alertController: AlertController) { }


  ngOnInit() {
    this.getCourses()
  }

  getCourses(){
    this.adminServ.getCourseList().subscribe({
      next: (result)=>{
        console.log(result)
        this.courseList=result.allCourses;
        result.allCourses.map((element: any)=>{
          console.log(element['teacher'][0]['name'])
        })
      },
      error: (error)=>{
        console.log(error)
      }
    })
  }

  // enroll
  async presentAlert(id:any, name:any, fees:any) {
    const alert = await this.alertController.create({
      header: 'Enroll',
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
            text: 'Enroll',
            handler: (alertData) => { //takes the data 
              let obj = {
                courseId: id,
                studentId: localStorage.getItem('id'),
                email:localStorage.getItem('email'),
                amount:fees,
                cardNo: alertData[0],
                
              }
                console.log(obj);
                
                this.addLect(obj)
            }
        }
    ],
      inputs: [
        {
          placeholder: 'Card No',
          type:'number',
          attributes:[
            RequiredValidator
          ],
          min: 12,
          max: 12,
        },
        {
          placeholder: 'Card Holder Name',
          type:'text'
        },
        {
          placeholder: 'CVV',
          type:'number',
          min: 3,
          max: 3

        },
        
      ],
    });

    await alert.present();
  }

  async addLect(obj:any) {
    
    await this.studentServ.enrollCourse(obj).subscribe({
      next: (result) => {
        console.log(result)
        
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
