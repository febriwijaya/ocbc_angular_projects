import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Session19Component } from './session19.component';

// router untuk feature module dapat kalian buat dengan argument...
//     --routing

// ...ketika kalian membuat module baru dengan
//     ng g module <NAMA_MODULE>

// contoh: ng g[enerate] module <NAMA_MODULE> --routing

const routes: Routes = [
  // NOTE khusus feature module routing:

  // Angular tidak akan load berdasarkan direktori module routing berada,
  // maka kita harus menambahkan path-nya secara manual.

  // Untuk contohnya, kalian bisa buka file: session25-routing.module.ts
  // agar kalian paham tentang cara load dengan children component

  { path: 'session19', component: Session19Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session19RoutingModule { }
