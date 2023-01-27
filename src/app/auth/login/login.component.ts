import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private authSrv: AuthenticationService,
    private router: Router) { }

  ngOnInit() {}

  login(data: any) {
    console.log(data)
    this.authSrv.login(data).subscribe({
      next: (result) => {

        localStorage.setItem('userType', result.userType);
        localStorage.setItem('id', result.id);
        localStorage.setItem('email', result.email);
        localStorage.setItem('mobile', result.mobile);
        console.log(localStorage.getItem('userType'));
        this.router.navigate([''])
        // if (result.userType == 'Admin') {
        //   this.router.navigate(['/admin']);
        // } else if (result.userType == 'Student') {
        //   this.router.navigate(['/student']);
        // } else if (result.userType == 'Teacher') {
        //   this.router.navigate(['/teacher']);
        // }
      },
      error: (error) => {
        console.log(error)
      }
    })
  }

}
