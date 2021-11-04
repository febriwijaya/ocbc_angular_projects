import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session21Component } from './session21.component';
import { Session21RoutingModule } from './session21-routing.module';



@NgModule({
  declarations: [
    Session21Component
  ],
  imports: [
    CommonModule,
    Session21RoutingModule
  ]
})
export class Session21Module { }
