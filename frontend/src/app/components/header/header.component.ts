import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../../services/auth.service";
import {IUserModelInfo} from "../../../models/IUser";
import {MdbModalService} from "mdb-angular-ui-kit/modal";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false
  username?:string;

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    if (this.authService.getAccessToken()) {
      this.authService.UserIsLogged.next(true)
    } else {
      this.authService.UserIsLogged.next(false)
    }
    this.authService.UserIsLogged.subscribe({
      next: (value) => {
        this.isLoggedIn = value
        if (value) {
          let user: IUserModelInfo | void = this.authService.getUser();
          if (user) {
            if ("profile" in user) {
              this.username = user.profile.first_name
            }
          }
        }
      }
    })
  }

  logOut() {
    this.authService.UserIsLogged.next(false)
    this.isLoggedIn = false
    this.authService.signOut()
    // window.location.reload()
  }

}
