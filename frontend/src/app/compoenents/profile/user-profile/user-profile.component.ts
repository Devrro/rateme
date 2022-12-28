import {Component, Input, OnInit} from '@angular/core';
import {IUserModelInfo} from "../../../../models/IUser";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {AuthService} from "../../../../services/auth.service";
import {regExList} from "../../../../constants/regEx.constants";


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {

  @Input()
  currentUser: IUserModelInfo;
  userForm: FormGroup;
  usersAvatarForm: FormGroup;

  _editAbout: boolean = false
  _disableOnSubmit: boolean = true
  _placeholderInfo: string = 'Minimum characters input'
  _minChars: number = 10

  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
    const user = this.authService.getUser()
    if (user) {
      this.currentUser = user
      console.log(user)
    } else {
      this.getUser()
    }
    this._createUserForm()
    this._createAvatarForm()
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

  _createUserForm(): void {
    this.userForm = new FormGroup({
      birth_date: new FormControl(``, [Validators.min(1), Validators.max(130)]),
      phone_number: new FormControl(``, [Validators.pattern(regExList.ukrainian_phone_num)]),
      first_name: new FormControl(``, [
        Validators.maxLength(25), Validators.minLength(2)
      ]),
      last_name: new FormControl(``, [
        Validators.maxLength(25), Validators.minLength(2)
      ]),
      about_user: new FormControl(``, [Validators.minLength(10), Validators.maxLength(5000)]),
    })
  }

  private _createAvatarForm() {
    this.usersAvatarForm = new FormGroup(
      {
        avatar: new FormControl(null, [])
      }
    )

  }

  onSubmit() {

    let newInfo = this.userForm.value

    Object.keys(newInfo).forEach(key => {
      if (newInfo[key] === '' || newInfo[key] === null) {
        delete newInfo[key];
      }
    })
    if (Object.keys(newInfo).length !== 0) {
      this.userService.updateUserProfileByID(newInfo).subscribe({
        next: (profile) => {
          this.currentUser.profile = profile
          this.authService.updateUser(profile)
          this.userForm.reset(this.userForm.value)
          this._editAbout = false
        },
        error: (err) => {
          console.warn(err)
        }
      })
    }
  }

  _uploadPicture(e: any) {
    const file: File = e.target.files[0];

    if (file) {
      let data = new FormData()
      data.append('avatar', file)
      this.userService.addAvatarToUser(data).subscribe(
        {
          next: value => {
            this.currentUser.profile.avatar = value.avatar
            console.log(value)
          }
        }
      )
    }
  }

}
