import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session20Component } from './session20.component';
import { Session20RoutingModule } from './session20-routing.module';
import { AngularDataBindingComponent } from './angular-data-binding/angular-data-binding.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Session20Component,
    AngularDataBindingComponent
  ],
  imports: [
    CommonModule,
    Session20RoutingModule,
    FormsModule
  ]
})
export class Session20Module { }
