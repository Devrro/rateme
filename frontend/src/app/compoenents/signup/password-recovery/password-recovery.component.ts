import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../../services/user.service";
import {ActivatedRoute} from "@angular/router";
import {Validators} from "@angular/forms";

@Component({
  selector: 'app-password-recovery',
  templateUrl: './password-recovery.component.html',
  styleUrls: ['./password-recovery.component.sass']
})
export class PasswordRecoveryComponent implements OnInit {

  passwordMailRecovery: FormGroup;
  _newPasswordForm: FormGroup;
  detail: string

  isMail: boolean

  newPassword: string
  confirmPassword: string
  validPassword: boolean = false
  recoverSent: string = ''

  token: string;

  constructor(
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
  ) {
  }

  ngOnInit(): void {
    this._createRecoverForm()
    this._createNewPasswordForm()
    this.activatedRoute.params.subscribe(
      {
        next: value => {
          this.isMail = value['token'] == 'send_to_mail'
          if (!this.isMail) {
            this.token = value['token']
          }
        }
      }
    )
  }

  _createRecoverForm() {
    this.passwordMailRecovery = new FormGroup({
      email: new FormControl('')
    })
  }

  _createNewPasswordForm() {
    this._newPasswordForm = new FormGroup({
      password: new FormControl('', [
        Validators.minLength(8),
        Validators.maxLength(16),
        Validators.required,
      ]),
      confirm: new FormControl('', [])
    })
  }

  _recoverPassword() {
    this.userService.recoverPassword(this.passwordMailRecovery.value).subscribe({
      next: v => {
        this.recoverSent = v.detail
      },
      error: err => {
      }
    })
  }

  _sendNewPassword() {
    this.userService.sendNewPassword(this.token,this._newPasswordForm.value['password']).subscribe(
      {
        next:(v) =>{
          this.recoverSent = v.detail
        }
      }
    )
  }

  passwords_confirm($event: any) {
    this.validPassword = this.confirmPassword == this.newPassword
    console.log(this._newPasswordForm.valid)

  }
}
