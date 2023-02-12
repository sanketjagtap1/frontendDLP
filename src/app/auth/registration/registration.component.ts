import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {

  regiForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    mobile: new FormControl('',Validators.required),
    userType: new FormControl(),
    gender: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
  });

  constructor(private authSrv: AuthenticationService,
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() { }
  registerUser() {
    let data= this.regiForm.value;
    data['userType']='Student';
    console.log(data)
    this.authSrv.registration(data).subscribe({
      next: (result) => {
        console.log(result)
        console.log(result.userType)
          if(result.message == 'success'){
            this.presentToast(result.message, 'success')
            this.router.navigate(['']);
          }
          else{
            console.log()
            this.presentToast(result.message, 'danger')
          }
          
        },
        error: (error) => {
        this.presentToast(error, 'danger')
        console.log(error)
      }
    })
  }

  async presentToast(error:any, color:any) {
    const toast = await this.toastController.create({
      message: error,
      duration: 1500,
      position: 'bottom',
      color: color
    });

    await toast.present();
  }

}
