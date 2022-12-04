import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IProfile, IUserModelInfo} from "../models/IUser";
import {boards_url} from "../constants/url.constants";
import {IResponse} from "../models/IResponse";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http:HttpClient
  ) { }

  getUsers():Observable<IResponse<IUserModelInfo>>{
    return this.http.get<IResponse<IUserModelInfo>>(`${boards_url.all_users}`,)
  }
  getMeUser():Observable<IResponse<IUserModelInfo>>{
    return this.http.get<IResponse<IUserModelInfo>>(`${boards_url.me}`,)
  }

  getUserById(id:string):Observable<IResponse<IUserModelInfo>>{
    return this.http.get<IResponse<IUserModelInfo>>(`${boards_url.all_users}/id`,)
  }

  updateUserProfileByID(profileInfo:Partial<IProfile>):Observable<IProfile>{
    return this.http.patch<IProfile>(`${boards_url.profile}`, {...profileInfo}, {})
  }

}
