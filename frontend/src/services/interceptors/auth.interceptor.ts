import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from 'rxjs';
import {TokenStorageService} from "../token-storage.service";
import {AuthService} from "../auth.service";
import {ITokenPair} from "../../models/ITokenPair";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import {Router} from "@angular/router";

const TOKEN_HEADER_TYPE = 'Authorization'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  isRefreshing = false
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private authService: AuthService,
    private router:Router
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request
    const token = this.authService.getAccessToken();
    if (token != null) {
      authReq = this.AddTokenHeader(request, token)
    }
    return next.handle(authReq).pipe(catchError(error => {
        if (error instanceof HttpErrorResponse && !authReq.url.includes('register') && error.status === 401) {
          return this.handle401error(authReq, next)
        }
        // this.router.navigate(['login']).then()
        // this.authService.signOut()
        // return throwError(() => new Error('Tokes is expired'))
      })
    ) as any
  }

  private AddTokenHeader(request: HttpRequest<unknown>, token: string) {
    return request.clone({headers: request.headers.set(TOKEN_HEADER_TYPE, 'Bearer ' + token)})
  }

  handle401error(request: HttpRequest<any>, next: HttpHandler):any {
    if (!this.isRefreshing) {
      this.isRefreshing = true
      const refresh = this.authService.getRefreshToken()
      if (refresh) {
        return this.authService.refreshToken(refresh).pipe(
          switchMap((tokens) => {
            return next.handle(this.AddTokenHeader(request, tokens.access))
          }),
          catchError(() => {
            this.isRefreshing = false
            this.authService.signOut()
            this.router.navigate(['login']).then()
            return throwError(()=>new Error('Token is invalid or expired'))
          })
        )
      }
    }

  }
}

export const AuthServiceProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
]
