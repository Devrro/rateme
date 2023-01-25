import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs";
import {tap} from "rxjs";
import {Observable} from "rxjs";
import {BehaviorSubject} from "rxjs";
import {user_urls} from '../constants/url.constants'
import {IProfile, IUserModelInfo, IUserModelSignUp} from "../models/IUser";
import {ITokenPair} from "../models/ITokenPair";


const TOKEN_KEY = 'auth_token'
const REFRESH_KEY = 'refresh_token'
const USER_KEY = 'auth_user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  public UserIsLogged: BehaviorSubject<boolean> = new BehaviorSubject(false)
  public UserInfo: BehaviorSubject<IUserModelInfo | {}> = new BehaviorSubject({})

  constructor(
    private http: HttpClient,
  ) {
  }

  login(login: string, password: string): Observable<ITokenPair> {
    return this.http.post<ITokenPair>(`${user_urls.login}`, {login: login, password: password})
  }

  register(user: IUserModelSignUp): Observable<IUserModelInfo> {
    return this.http.post<IUserModelInfo>(`${user_urls.register}`, {...user})
  }

  refreshToken(token: string): Observable<ITokenPair> {

    return this.http.post<ITokenPair>(`${user_urls.refresh}`, {"refresh": token}).pipe(
      tap({
        next: (token) => {
          this.SaveTokens(token)
        },
        error: (err) => {
          catchError(err)
        }
      }),
    )
  }

  signOut() {
    this.UserIsLogged.next(false)
    this.UserInfo.next({})
    window.sessionStorage.clear();
  }

  public SaveTokens(tokens: { access: string, refresh: string }) {
    window.sessionStorage.setItem(TOKEN_KEY, tokens.access)
    window.sessionStorage.setItem(REFRESH_KEY, tokens.refresh)
  }

  public getAccessToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY)
  }

  public getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESH_KEY)
  }

  public saveUser(user: IUserModelInfo): void {
    this.UserInfo.next(user)
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
  }

  public updateUser(profile: IProfile): void {
    const user = this.getUser()
    if (user) {
      user.profile = profile
      this.saveUser(user)
    }
  }

  public updateUserAvatar(avatar: string): void {
    const user = this.getUser()
    if (user) {
      user.profile.avatar = avatar
      console.log(avatar)
      this.saveUser(user)
    }
  }

  public getUser(): IUserModelInfo | void {
    const user = window.sessionStorage.getItem(USER_KEY)
    if (user) {
      return JSON.parse(user)
    }
  }

}
