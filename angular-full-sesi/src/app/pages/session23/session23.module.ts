import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { AngularViewEncapsulationComponent } from './angular-view-encapsulation/angular-view-encapsulation.component';
import { ViewEncapsulationEmulatedComponent } from './view-encapsulation-emulated/view-encapsulation-emulated.component';
import { ViewEncapsulationShadowDomComponent } from './view-encapsulation-shadow-dom/view-encapsulation-shadow-dom.component';
import { ViewEncapsulationNoneComponent } from './view-encapsulation-none/view-encapsulation-none.component';
import { Session23Component } from './session23.component';
import { Session23RoutingModule } from './session23-routing.module';
import { ClickablesModule } from 'src/app/components/clickables/clickables.module';

@NgModule({
  declarations: [
    TodoDashboardComponent,
    ViewEncapsulationEmulatedComponent,
    ViewEncapsulationNoneComponent,
    ViewEncapsulationShadowDomComponent,
    AngularViewEncapsulationComponent,
    Session23Component
  ],
  imports: [
    CommonModule,
    Session23RoutingModule,
    ClickablesModule
  ],

  // Kita harus export component yang dibutuhkan, jika kita ingin
  // menggunakan component di dalam root component
  exports: [
    TodoDashboardComponent,
    AngularViewEncapsulationComponent
  ]
})
export class Session23Module { }
