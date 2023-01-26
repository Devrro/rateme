import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ReviewsService} from "../../../services/reviews.service";

@Component({
  selector: 'app-review-qr-form',
  templateUrl: './review-qr-form.component.html',
  styleUrls: ['./review-qr-form.component.scss']
})
export class ReviewQrFormComponent implements OnInit {

  _reviewForm: FormGroup
  _id: string = ''
  _sendMsg: string;
  _errMsg: any;
  _currentRate = 5
  constructor(
    private activatedRoute: ActivatedRoute,
    private reviewService: ReviewsService,
  ) {
  }

  ngOnInit(): void {
    this._creteReviewFormGroup()
    this.activatedRoute.params.subscribe(
      {
        next: value => {
          this._id = value['id']
        }
      }
    )

  }

  _creteReviewFormGroup(): void {
    this._reviewForm = new FormGroup({
      customer_phone_number: new FormControl(''),
      customer_review: new FormControl(''),
      customer_name: new FormControl(''),
      place_score: new FormControl('', [Validators.required]),
    })
  }


  _submitReview(id: string): void {
    console.log(this._reviewForm.value)
    this.reviewService.postReview(id, this._reviewForm.value).subscribe(
      {
        next:value => {
          this._sendMsg = value.detail
        },
        error:err => {
          console.log(err)
          this._errMsg = err.message
        }
      }
    )
  }

}
