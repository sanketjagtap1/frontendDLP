import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthenticationService,
    private router: Router,
    private toastController: ToastController) { }

  ngOnInit() {}

  login(data: any) {
    console.log(data)
    this.authSrv.login(data).subscribe({
      next: (result) => {
        console.log(result)
        if(result.error=="Incorrect Email Or Password"){
          this.presentToast(result.error)
        }
        localStorage.setItem('userType', result.userType);
        localStorage.setItem('id', result.id);
        localStorage.setItem('email', result.email);
        localStorage.setItem('mobile', result.mobile);
        
        this.router.navigate([''])
        if (result.userType == 'Admin') {
            this.router.navigate(['/admin']);
          } else if (result.userType == 'Student') {
              this.router.navigate(['/student']);
            } else if (result.userType == 'Teacher') {
                this.router.navigate(['/teacher']);
              }
            },
            error: (error) => {
              console.log(error)
      }
    })
  }

  async presentToast(error:any) {
    const toast = await this.toastController.create({
      message: error,
      duration: 1500,
      position: 'bottom',
      color: 'danger'
    });

    await toast.present();
  }

}
