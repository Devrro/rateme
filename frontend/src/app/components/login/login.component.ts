import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {IUserModelInfo} from "../../../models/IUser";
import {FormControl, FormGroup} from "@angular/forms";
import {catchError, debounceTime, tap, throwError} from "rxjs";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  formLogin: FormGroup = new FormGroup({
    login: new FormControl('antit4'),
    password: new FormControl('12345678')
  })
  isLoggedIn = false;
  isLoginFailed = false;
  errMsg = ''
  user: IUserModelInfo;
  roles: string[] = [];



  constructor(
    private authService: AuthService,
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.authService.UserIsLogged.subscribe({next: value => this.isLoggedIn = value})
    if (this.authService.getAccessToken()) {
      const user = this.authService.getUser()
      if (user) {
        this.user = user
      }
      this.authService.UserIsLogged.next(true)
    } else {
      this.authService.UserIsLogged.next(false)
    }
  }

  onSubmit(): void {
    let {login, password} = this.formLogin.value
    login = login.toLowerCase()
    this.authService.login(login, password).subscribe(
      {
        next: (value) => {
          this.authService.SaveTokens(value)
          this.isLoginFailed = false
          this.isLoggedIn = true

          this.userService.getMeUser().pipe().subscribe({
            next: (value) => {
              let user = value.data[0]
              this.authService.saveUser(user)
              this.user = user
              this.authService.UserIsLogged.next(true)
              this.router.navigate(['/profile', 'info'])
            },
            error: (err) => {
              this.authService.UserIsLogged.next(false)
              console.log(err)
              this.errMsg = err.error.detail;
              this.isLoginFailed = true
            }
          })
        },
        error: (err) => {
          this.errMsg = err.error.detail;
          this.isLoginFailed = true
        },
      }
    )

  }
}
