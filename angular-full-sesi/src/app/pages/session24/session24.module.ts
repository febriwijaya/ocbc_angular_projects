import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginReactiveFormComponent } from './login-reactive-form/login-reactive-form.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { Session24Component } from './session24.component';
import { Session24RoutingModule } from './session24-routing.module';

@NgModule({
  declarations: [
    Session24Component,
    LoginReactiveFormComponent,
    TemplateDrivenFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    Session24RoutingModule
  ],
  exports: [
    Session24Component
  ]
})
export class Session24Module { }
