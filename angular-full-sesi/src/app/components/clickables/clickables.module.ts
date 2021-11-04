import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { LinkComponent } from './link/link.component';
import { RouterModule } from '@angular/router';

/**
 * Clickables module
 *
 * Module ini berisi component yang dapat di-share di beberapa module
 * pada folder pages sekaligus.
 *
 * Kalian dapat lihat module ini dipakai di beberapa module berikut:
 * - Session19Module
 * - Session24Module
 * - Session25Module
 *
 * NOTE:
 * Module ini merupakan salah satu implementasi reusable component.
 * Untuk dapat memahami cara kerja reusable component pada Angular,
 * kalian dapat membuka link berikut:
 *
 * https://stackoverflow.com/questions/39486029/share-component-between-2-modules
 */

@NgModule({
  declarations: [
    ButtonComponent,
    LinkComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    ButtonComponent,
    LinkComponent
  ]
})
export class ClickablesModule { }
