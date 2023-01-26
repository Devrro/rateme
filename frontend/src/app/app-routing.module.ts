import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {Routes} from '@angular/router';
import {LoginComponent} from "./components/login/login.component";
import {SignupComponent} from "./components/signup/signup.component";
import {HomeComponent} from "./components/home/home.component";
import {ProfileComponent} from "./components/profile/profile.component";
import {UserProfileComponent} from "./components/profile/user-profile/user-profile.component";
import {QrCodesPageComponent} from "./components/profile/qr-codes-page/qr-codes-page.component";
import {QrReviewsPageComponent} from "./components/profile/qr-reviews-page/qr-reviews-page.component";
import {QrCodeFormComponent} from "./components/profile/qr-codes-page/qr-code-form/qr-code-form.component";
import {ReviewQrFormComponent} from "./components/review-qr-form/review-qr-form.component";
import {UserGuard} from "../services/guards/user.guard";
import {TelegramInfoComponent} from "./components/profile/telegram-info/telegram-info.component";
import {ProfileActivateComponent} from "./components/signup/profile-activate/profile-activate.component";
import {
  ProfileActivatedComponent
} from "./components/signup/profile-activate/profile-activated/profile-activated.component";
import {Redirect404Component} from "./components/redirect-pages/redirect404/redirect404.component";
import {PasswordRecoveryComponent} from "./components/signup/password-recovery/password-recovery.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'activate/:token', component: ProfileActivateComponent},
  {path: 'password_recovery/:token', component: PasswordRecoveryComponent},
  {path: 'user_is_activated', component: ProfileActivatedComponent},
  {
    path: 'profile', component: ProfileComponent, canActivate: [UserGuard],
    children: [
      {path: 'info', component: UserProfileComponent},
      {
        path: 'qr_codes', component: QrCodesPageComponent, children: [
          {path: 'qr_create', component: QrCodeFormComponent}
        ]
      },
      {path: 'qr_reviews', component: QrReviewsPageComponent},
      {path: 'telegram_info', component: TelegramInfoComponent},
    ]
  },
  {path: 'rate_place/:id', component: ReviewQrFormComponent},
  {path: 'error',component:Redirect404Component},
  {path: '**', redirectTo: 'error'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
