import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PublicPlaceService} from "../../../../../services/public-place.service";
import {PublicPlace} from "../../../../../models/IPublic_place";


@Component({
  selector: 'app-qr-code-form',
  templateUrl: './qr-code-form.component.html',
  styleUrls: ['./qr-code-form.component.scss']
})
export class QrCodeFormComponent implements OnInit {
  _PlaceGroup: FormGroup

  @Output()
  addQrEvent = new EventEmitter<PublicPlace>()

  constructor(
    private placeService: PublicPlaceService
  ) {
  }

  ngOnInit(): void {
    this.createPlaceForm()
  }

  createPlaceForm(): void {
    this._PlaceGroup = new FormGroup({
      name: new FormControl(),
      address: new FormGroup({
        country: new FormControl(),
        city: new FormControl(),
        street: new FormControl(),
        street_number: new FormControl(),
      })
    })
  }

  _SubmitPlace() {
    this.placeService.createPlace(this._PlaceGroup.value).subscribe({
      next: (value) => {
        this.addQrEvent.emit(value)
      }
    })
  }
}
