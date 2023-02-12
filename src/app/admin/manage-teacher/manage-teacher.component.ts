import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-manage-teacher',
  templateUrl: './manage-teacher.component.html',
  styleUrls: ['./manage-teacher.component.scss'],
})
export class ManageTeacherComponent implements OnInit {
  color:any;
  userList:any;

  constructor(private adminSrv:AdminService, private alertController: AlertController, private toastController: ToastController) { 
    this.getUserList()
    console.log(this.userList)
  }

  ngOnInit() {
    
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

  async deleteUser(id:any){
    let obj = {
      "id": id
    }
    await this.adminSrv.deleteUser(obj).subscribe({
      next: (result)=>{
        console.log(result)
        this.presentToast(result.message, "success")
        this.getUserList()
      },
      error: (err) =>{
        console.log(err)
        this.presentToast(err.statusText, "Danger")
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
