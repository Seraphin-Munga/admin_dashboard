import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LoginComponent } from './components/login/login.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BackgroundImgComponent } from './background-img/background-img.component';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzGridModule } from 'ng-zorro-antd/grid'
import { NzCheckboxModule } from 'ng-zorro-antd/checkbox'


@NgModule({
  declarations: [
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    BackgroundImgComponent,
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    NzFormModule,
    NzButtonModule,
    NzGridModule,
    NzCheckboxModule
  ]
})
export class AccountModule { }
