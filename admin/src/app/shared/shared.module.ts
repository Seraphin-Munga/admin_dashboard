import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TokenHttpInterceptor } from '../Interceptors/token-http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenHttpInterceptor,
      multi: true
    },
  ]
})
export class SharedModule { }
