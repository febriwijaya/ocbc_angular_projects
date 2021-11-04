import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Session19RoutingModule } from './session19-routing.module';

import { ChildComponent } from './child/child.component';
import { Session19Component } from './session19.component';
import { ClickablesModule } from 'src/app/components/clickables/clickables.module';


@NgModule({
  declarations: [
    ChildComponent,
    Session19Component
  ],
  imports: [
    CommonModule,
    Session19RoutingModule,
    ClickablesModule
  ],

  // Kita harus export component yang dibutuhkan, jika kita ingin
  // menggunakan component di dalam root component
  exports: [
  ]
})
export class Session19Module { }
