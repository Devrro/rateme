import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {CreatePlace, PublicPlace} from "../models/IPublic_place";
import {PublicPlaceUrl} from "../constants/url.constants";
import {IResponse} from "../models/IResponse";

@Injectable({
  providedIn: 'root'
})
export class PublicPlaceService {

  constructor(
    private httpClient: HttpClient
  ) {
  }

  getMyPlaces(params:{}): Observable<IResponse<PublicPlace>> {
    return this.httpClient.get<IResponse<PublicPlace>>(`${PublicPlaceUrl.getMyPlaces}`,{params:{...params}})
  }

  createPlace(data: CreatePlace): Observable<PublicPlace> {
    return this.httpClient.post<PublicPlace>(`${PublicPlaceUrl.createPlace}`, {...data})
  }

  deletePlace(id:string):Observable<any>{
    return this.httpClient.delete(`${PublicPlaceUrl.deletePlace}/${id}`, {})
  }

}
