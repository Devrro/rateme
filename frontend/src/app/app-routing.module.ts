import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./compoenents/login/login.component";
import {SignupComponent} from "./compoenents/signup/signup.component";
import {HomeComponent} from "./compoenents/home/home.component";
import {ProfileComponent} from "./compoenents/profile/profile.component";
import {UserProfileComponent} from "./compoenents/profile/user-profile/user-profile.component";
import {QrCodesPageComponent} from "./compoenents/profile/qr-codes-page/qr-codes-page.component";
import {QrReviewsPageComponent} from "./compoenents/profile/qr-reviews-page/qr-reviews-page.component";
import {QrCodeFormComponent} from "./compoenents/profile/qr-codes-page/qr-code-form/qr-code-form.component";
import {ReviewQrFormComponent} from "./compoenents/review-qr-form/review-qr-form.component";
import {UserGuard} from "../services/guards/user.guard";
import {TelegramInfoComponent} from "./compoenents/profile/telegram-info/telegram-info.component";
import {ProfileActivateComponent} from "./compoenents/signup/profile-activate/profile-activate.component";
import {
  ProfileActivatedComponent
} from "./compoenents/signup/profile-activate/profile-activated/profile-activated.component";
import {Redirect404Component} from "./compoenents/redirect-pages/redirect404/redirect404.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'signin', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'activate/:token', component: ProfileActivateComponent},
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
