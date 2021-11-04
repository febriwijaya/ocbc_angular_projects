import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Session20Component } from './session20.component';

const routes: Routes = [
  { path: 'session20', component: Session20Component }
];

// router untuk feature module dapat kalian buat dengan argument...
//     --routing

// ...ketika kalian membuat module baru dengan
//     ng g module <NAMA_MODULE>

// contoh: ng g[enerate] module <NAMA_MODULE> --routing

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session20RoutingModule { }
