import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(public userService: UserService, private router: Router) { } //Cambiar despues a private
  model = {
    email: '',
    password: ''
  };
  emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  serverErrorMessages: string;

  ngOnInit() {
    if (this.userService.isLoggedIn())
      this.router.navigateByUrl('/profile');
  }

  onSubmit(form: NgForm) {
    this.userService.login(form.value)
      .subscribe(res => {
        this.userService.setToken(res['token']);
        this.router.navigateByUrl('/profile');
      },
        err => {
          this.serverErrorMessages = err.error.message;
        }
      );
  }

  onForgotPassword() {
    this.router.navigateByUrl('/forgot');
  }

}//End class
