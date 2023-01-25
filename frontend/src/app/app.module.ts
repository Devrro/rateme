import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {AuthServiceProvider} from "../services/interceptors/auth.interceptor";
import {HeaderComponent} from './compoenents/header/header.component';
import {LoginComponent} from './compoenents/login/login.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MdbAccordionModule} from 'mdb-angular-ui-kit/accordion';
import {MdbCarouselModule} from 'mdb-angular-ui-kit/carousel';
import {MdbCheckboxModule} from 'mdb-angular-ui-kit/checkbox';
import {MdbCollapseModule} from 'mdb-angular-ui-kit/collapse';
import {MdbDropdownModule} from 'mdb-angular-ui-kit/dropdown';
import {MdbFormsModule} from 'mdb-angular-ui-kit/forms';
import {MdbModalModule} from 'mdb-angular-ui-kit/modal';
import {MdbPopoverModule} from 'mdb-angular-ui-kit/popover';
import {MdbRadioModule} from 'mdb-angular-ui-kit/radio';
import {MdbRangeModule} from 'mdb-angular-ui-kit/range';
import {MdbRippleModule} from 'mdb-angular-ui-kit/ripple';
import {MdbScrollspyModule} from 'mdb-angular-ui-kit/scrollspy';
import {MdbTabsModule} from 'mdb-angular-ui-kit/tabs';
import {MdbTooltipModule} from 'mdb-angular-ui-kit/tooltip';
import {MdbValidationModule} from 'mdb-angular-ui-kit/validation';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {SignupComponent} from './compoenents/signup/signup.component';
import {HomeComponent} from './compoenents/home/home.component';
import {ProfileComponent} from './compoenents/profile/profile.component';
import {UserProfileComponent} from './compoenents/profile/user-profile/user-profile.component';
import {QrCodesPageComponent} from './compoenents/profile/qr-codes-page/qr-codes-page.component';
import {QrReviewsPageComponent} from './compoenents/profile/qr-reviews-page/qr-reviews-page.component';
import {QrCodeFormComponent} from './compoenents/profile/qr-codes-page/qr-code-form/qr-code-form.component';
import {ReviewQrFormComponent} from './compoenents/review-qr-form/review-qr-form.component';
import {MatSelectModule} from "@angular/material/select";
import {MatPaginatorModule} from "@angular/material/paginator";
import { TelegramInfoComponent } from './compoenents/profile/telegram-info/telegram-info.component';
import { ProfileActivateComponent } from './compoenents/signup/profile-activate/profile-activate.component';
import { ProfileActivatedComponent } from './compoenents/signup/profile-activate/profile-activated/profile-activated.component';
import { RedirectPagesComponent } from './compoenents/redirect-pages/redirect-pages.component';
import { Redirect404Component } from './compoenents/redirect-pages/redirect404/redirect404.component';
import {MatSliderModule} from "@angular/material/slider";


const mdbModules = [
  MdbAccordionModule,
  MdbCarouselModule,
  MdbCheckboxModule,
  MdbCollapseModule,
  MdbDropdownModule,
  MdbFormsModule,
  MdbModalModule,
  MdbPopoverModule,
  MdbRadioModule,
  MdbRangeModule,
  MdbRippleModule,
  MdbScrollspyModule,
  MdbTabsModule,
  MdbTooltipModule,
  MdbValidationModule,
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    ProfileComponent,
    UserProfileComponent,
    QrCodesPageComponent,
    QrReviewsPageComponent,
    QrCodeFormComponent,
    ReviewQrFormComponent,
    TelegramInfoComponent,
    ProfileActivateComponent,
    ProfileActivatedComponent,
    RedirectPagesComponent,
    Redirect404Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatSelectModule,
    // SharedModule
    ...mdbModules,
    MatPaginatorModule,
    MatSliderModule,
  ],
  providers: [AuthServiceProvider],
  bootstrap: [AppComponent]

})
export class AppModule {
}
