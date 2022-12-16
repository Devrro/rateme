import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ReviewsService} from "../../../../services/reviews.service";
import {ReviewPlace} from "../../../../models/IReviewPlace";
import {PageEvent} from "@angular/material/paginator";

@Component({
  selector: 'app-qr-reviews-page',
  templateUrl: './qr-reviews-page.component.html',
  styleUrls: ['./qr-reviews-page.component.scss']
})
export class QrReviewsPageComponent implements OnInit {

  @Input()
  place_id:string;

  avg_score:string
  reviews_list: ReviewPlace[];

  err:string

  _getReviewsParams = {
    page: 1,
    page_size: 10,
    ordering:'-created_at'
  }
  _getAvgScoreParams: {}
  _pageCount: number;

  constructor(
    public activeModal:NgbActiveModal,
    private reviewsService:ReviewsService,
  ) { }

  ngOnInit(): void {
    this._getReviews(this._getReviewsParams)
    this._getAvgScore(this._getAvgScoreParams)
  }

  _getReviews(params:{}):void{
    this.reviewsService
      .getReviews(this.place_id,params)
      .subscribe({
        next:value => {
          this._pageCount = parseInt(value.count)
          this.reviews_list = value.data
        },
        error: err => {
          this.err = err.error.detail
        }
      })
  }

  _getAvgScore(params:{}):void{
    this.reviewsService
      .getAvgScoreReviews(this.place_id,params)
      .subscribe({
        next:value => {
          this.avg_score = value.data.place_score__avg
        }
      })
  }

  handlePageEvent($event: PageEvent) {
    this._getReviewsParams.page_size = $event.pageSize
    this._getReviewsParams.page = $event.pageIndex + 1
    this._getReviews(this._getReviewsParams)
  }
}
