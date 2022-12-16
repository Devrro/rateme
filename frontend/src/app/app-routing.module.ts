import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'profile', component:ProfileComponent, canActivate:[UserGuard],
  children:[
    {path:'info',component:UserProfileComponent},
    {path:'qr_codes',component:QrCodesPageComponent,children:[
        {path: 'qr_create', component:QrCodeFormComponent}
      ]},
    {path:'qr_reviews',component:QrReviewsPageComponent},
  ]
  },
  {path:'rate_place/:id',component:ReviewQrFormComponent},
  {path:'**', redirectTo:''}
  // {path:'signin', component:LoginComponent}
  // {path:'signin', component:LoginComponent}
  // {path:'signin', component:LoginComponent}
  // {path:'signin', component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
