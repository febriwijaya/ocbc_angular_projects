import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  form = {
    inputData: new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(5) ])
    })
  }

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  get email () {
    return this.form.inputData.get('email')
  }

  get password () {
    return this.form.inputData.get('password')
  }

  ngOnInit(): void {
  }

  signIn () {
    this.authService
    .signIn(this.form.inputData.value)
    .subscribe((res: any) => {
      if(res) {
        this.authService.setAuthorizationToken(res.token)

        this.form.inputData.reset()
        this.router.navigate([ 'session26', 'studios' ])
      }
    })
  }

}
