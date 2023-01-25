import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-profile-activate',
  templateUrl: './profile-activate.component.html',
  styleUrls: ['./profile-activate.component.sass']
})
export class ProfileActivateComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    let token = this.activatedRoute.snapshot.paramMap.get('token')
    if (token) {
      this.userService.activateUser(token).subscribe(
        {
          next:value => {
            this.router.navigate(['user_is_activated']).then()
          },
          error:(err)=>{
            this.router.navigate(['page404']).then()
          }
        }
      )
    }
  }

}
