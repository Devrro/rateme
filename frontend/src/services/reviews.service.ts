import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReviewPlace, SendReviewPlace} from "../models/IReviewPlace";
import {ReviewPlaceUrl} from "../constants/url.constants";
import {IResponse} from "../models/IResponse";

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {

  constructor(
    private http:HttpClient,
  ) { }

  getReviews(id:string,params:{}):Observable<IResponse<ReviewPlace>>{
    return this.http.get<IResponse<ReviewPlace>>(`${ReviewPlaceUrl.getAllPlaceReviews}/${id}`,{params:{...params}})
  }
  getAvgScoreReviews(id:string,params:{}):Observable<{data:{place_score__avg:string}}>{
    return this.http.get<{data:{place_score__avg:string}}>(`${ReviewPlaceUrl.getAvgScorePlace}/${id}`,{params:{...params}})
  }

  postReview(id: string, value: SendReviewPlace):Observable<{detail:string}> {
    return this.http.post<{detail:string}>(`${ReviewPlaceUrl.sendReview}/${id}`,{...value})
  }
}

