import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {UserService} from "../../../services/user.service";
import {IUserModelInfo} from "../../../models/IUser";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  currentUser: IUserModelInfo;

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
  }


  ngOnInit(): void {


    const user = this.authService.getUser()

    if (user) {
      this.currentUser = user
    } else {
      this.getUser()
    }
  }


  getUser(): void {
    this.userService.getMeUser().subscribe({
      next: (value) => {
        const user: IUserModelInfo = value.data[0]
        this.currentUser = user
        this.authService.saveUser(user)
      },
      error: (value) => {
        console.log('Profile model error')
      }
    })
  }
}
