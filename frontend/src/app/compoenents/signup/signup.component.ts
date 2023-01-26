import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {Router} from "@angular/router";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  isSuccessful: boolean = true
  isSignUpFailed: boolean = false
  errMsg: string = '';

  registerForm: FormGroup = new FormGroup(
    {
      email: new FormControl('11d@gmail.com'),
      login: new FormControl('abrams1'),
      password: new FormControl('111111'),
      profile: new FormGroup(
        {
          first_name: new FormControl('Serhiy'),
          second_name: new FormControl('Terletskiy'),
          last_name: new FormControl('andriy'),
          age: new FormControl('18'),
          birth_date: new FormControl('1977-06-12'),
        }
      ),
    }
  );


  constructor(
    private authService: AuthService,
    private router: Router
  ) {

  }

  ngOnInit(): void {
  }

  onSubmit() {
    let user = this.registerForm.getRawValue()
    this.authService.register(user).subscribe({
        next: (value) => {
          this.isSuccessful = true
          this.isSignUpFailed = false
          this.router.navigate(['../','login'])
        },
        error: (err) => {
          if (err.error.email) {
            this.errMsg = 'The email is already registered'
          } else {
            this.errMsg = JSON.stringify(err)
          }
          this.isSignUpFailed = true
        }
      }
    )
  }
}
