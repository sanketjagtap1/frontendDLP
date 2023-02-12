import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { from } from 'rxjs';
import { AuthenticationService } from 'src/app/auth/authentication.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.scss'],
})
export class AddTeacherComponent implements OnInit {

  color:any;

  constructor(private authSrv: AuthenticationService,
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {}



  addTeacher(data:any){
    data.userType="Teacher";
    console.log(data)
    this.authSrv.registration(data).subscribe({
      next: (result)=>{
        console.log(result.message)
        this.presentToast(result.message)
        this.router.navigate(['admin/manageTeacher'])
      },
      error:(error)=>{
        console.log(error.statusText)
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
