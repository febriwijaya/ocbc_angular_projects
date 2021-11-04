import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { Session26Component } from './session26.component';
import { Session26RoutingModule } from './session26-routing.module';

import { ClickablesModule } from 'src/app/components/clickables/clickables.module';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StudioComponent } from './studio/studio.component';
// Session 26 - HttpClient: HTTP Interceptors
// Import httpInterceptorProviders yang sudah kita buat sebelumnya
import { httpInterceptorProviders } from 'src/app/http-interceptors';

@NgModule({
  declarations: [
    Session26Component,
    SignupComponent,
    SigninComponent,
    StudioComponent,
  ],
  imports: [
    CommonModule,
    Session26RoutingModule,
    ClickablesModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  // Session 26 - HttpClient: HTTP Interceptors
  // Taruh httpInterceptorProviders di dalam array providers
  // seperti contoh di bawah ini

  /**
   *
   * NOTE: HTTP Interceptors di Angular memiliki alur unik:
   *
   *                [====HttpClient====]
   *                    |          ^
   *                    v          |
   *                [ Auth-Interceptor ]
   *                    |          ^
   *                    v          |
   *                [  LogInterceptor  ]
   *                    |          ^
   *                    v          |
   *                [   Http-Backend   ]
   *                    |          ^
   *                    v          |
   *                [======Server======]
   *
   * Arah ini menandakan alur request-response.
   * Untuk dokumentasi lengkapnya:
   * https://angular.io/guide/http#intercepting-requests-and-responses
   *
   **/
  providers: [
    httpInterceptorProviders,
  ]
})
export class Session26Module { }
