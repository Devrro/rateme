import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";

@Component({
  selector: 'app-telegram-info',
  templateUrl: './telegram-info.component.html',
  styleUrls: ['./telegram-info.component.scss']
})
export class TelegramInfoComponent implements OnInit {

  telegramCode: string = ''
  is_active: boolean
  slider_value: number


  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.userService.getUserTelegramKeyObject().subscribe(
      {
        next: value => {
          this.telegramCode = value.data[0].token_key
          this.is_active = value.data[0].is_active
        }
      }
    )

  }

  _sliderIsActive() {
    this.userService.getUserTelegramKeyObject().subscribe(
      {
        next: value => {
          if (value.data[0].is_active) {
            this.slider_value = 10
          } else {
            this.slider_value = 1
          }
        }
      }
    )
  }

  setValue($event: any) {
    this.userService.getUserTelegramKeyObject().subscribe(
      {
        next: value => {
          if (value.data[0].is_active) {
            this.slider_value = 10
          } else {
            this.slider_value = 1
          }
        }
      }
    )
  }
}
