import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HTTP_INTERCEPTORS, HttpErrorResponse
} from '@angular/common/http';
import {BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError} from 'rxjs';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

const TOKEN_HEADER_TYPE = 'Authorization'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  isRefreshing = false
  private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let authReq = request
    const token = this.authService.getAccessToken();
    if (token != null) {
      authReq = this.AddTokenHeader(request, token)
    }
    return next.handle(authReq).pipe(catchError(error => {
        if (
          (
            error instanceof HttpErrorResponse
            && !(authReq.url.includes('signup') || authReq.url.includes('login'))
            && error.status === 401
          )
        ) {
          return this.handle401error(authReq, next)
        }
        return throwError(error)
      })
    ) as any
  }

  private AddTokenHeader(request: HttpRequest<unknown>, token: string) {
    return request.clone({headers: request.headers.set(TOKEN_HEADER_TYPE, 'Bearer ' + token)})
  }

  handle401error(request: HttpRequest<any>, next: HttpHandler): any {
    if (!this.isRefreshing) {
      this.isRefreshing = true
      const refresh = this.authService.getRefreshToken()
      if (refresh) {
        return this.authService.refreshToken(refresh).pipe(
          switchMap((tokens) => {
            return next.handle(this.AddTokenHeader(request, tokens.access))
          }),
          catchError((err) => {
            this.isRefreshing = false
            this.authService.signOut()
            this.router.navigate(['login']).then()
            return throwError(() => err)
          })
        )
      }
      catchError(error => {
        return throwError(error)
      })
    }
    catchError(error => {
      return throwError(error)
    })
  }
}

export const AuthServiceProvider = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  }
]
