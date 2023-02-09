import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.scss'],
})
export class ManageTeacherComponent implements OnInit {

  userList:any;

  constructor(private adminSrv:AdminService, private alertController: AlertController) { }

  ngOnInit() {
    this.getUserList()
    console.log(this.userList)
  }

  // get user list
  async getUserList(){
    await this.adminSrv.getUserList().subscribe({
      next:(result)=>{
        console.log(result)
        this.userList=result.allStudents;
      },
      error:(error)=>{
        console.log(error)
      }
    })
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Please enter your info',
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
            text: 'Update',
            handler: (alertData) => { //takes the data 
                console.log(alertData);
            }
        }
    ],
      inputs: [
        {
          placeholder: 'Name',
        },
        {
          placeholder: 'Nickname (max 8 characters)',
          attributes: {
            maxlength: 8,
          },
        },
        {
          type: 'number',
          placeholder: 'Age',
          min: 1,
          max: 100,
        },
        {
          type: 'textarea',
          placeholder: 'A little about yourself',
        },
      ],
    });

    await alert.present();
  }

}
