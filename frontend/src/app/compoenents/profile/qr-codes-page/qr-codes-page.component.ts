import {Component, OnInit} from '@angular/core';
import {PublicPlace} from "../../../../models/IPublic_place";
import {PublicPlaceService} from "../../../../services/public-place.service";
import {MdbModalRef, MdbModalService} from "mdb-angular-ui-kit/modal";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {QrReviewsPageComponent} from "../qr-reviews-page/qr-reviews-page.component";

@Component({
  selector: 'app-qr-codes-page',
  templateUrl: './qr-codes-page.component.html',
  styleUrls: ['./qr-codes-page.component.scss']
})
export class QrCodesPageComponent implements OnInit {

  _msg: string = ''
  _qrDeleteId = ''
  _createQr: boolean = false;
  _qrs: PublicPlace[]
  params: Object = {
    page_size: 40
  }

  constructor(
    private publicPlaceService: PublicPlaceService,
    private modalService: NgbModal
  ) {
  }

  ngOnInit(): void {
    this._getUsersPublicPlaces()
  }

  _getUsersPublicPlaces() {
    this.publicPlaceService.getMyPlaces(this.params).subscribe({
      next: value => {
        this._qrs = value.data
      }
    })
  }

  _createQrMode(): void {
    this._createQr = !this._createQr
  }


  _addQr($event: PublicPlace) {
    if (!this._qrs) {
      this._qrs = []
    }
    this._qrs.unshift($event)
    if (this._qrs.length >= 10) {
      this._qrs.pop()
    }
  }

  _getReviewsModalOpenXl(place_id: string) {
    const reviewModalRef = this.modalService.open(QrReviewsPageComponent, {size: 'xl'})
    reviewModalRef.componentInstance.place_id = place_id
  }

  _deletePlaceModal(content: any, id: string, msg: string = 'Are sure want to delete place?') {
    this.modalService.open(content)
    this._msg = msg
    this._qrDeleteId = id
  }

  _deletePlace(modal: any,) {
    this.publicPlaceService.deletePlace(this._qrDeleteId).subscribe(
      {
        next: value => {
          this._qrs = this._qrs.filter(obj => obj.id != this._qrDeleteId)
        }
      }
    )
    modal.close()
  }

  _saveImg(src: string): void {
    window.open(src)
  }

}
