import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session27Component } from './session27.component';
import { Session27RoutingModule } from './session27-routing.module';



@NgModule({
  declarations: [
    Session27Component
  ],
  imports: [
    CommonModule,
    Session27RoutingModule
  ],
  exports: [
    Session27Component
  ]
})
export class Session27Module { }
