import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Session24Component } from './session24.component';

// router untuk feature module dapat kalian buat dengan argument...
//     --routing

// ...ketika kalian membuat module baru dengan
//     ng g module <NAMA_MODULE>

// contoh: ng g[enerate] module <NAMA_MODULE> --routing

const routes: Routes = [
  { path: 'session24', component: Session24Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session24RoutingModule { }
