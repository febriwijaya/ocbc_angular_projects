import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Session22Component } from './session22.component';
import { Session22RoutingModule } from './session22-routing.module';
import { PersonPipe } from './pipes/person.pipe';



@NgModule({
  declarations: [
    Session22Component,
    PersonPipe
  ],
  imports: [
    CommonModule,
    Session22RoutingModule
  ]
})
export class Session22Module { }
