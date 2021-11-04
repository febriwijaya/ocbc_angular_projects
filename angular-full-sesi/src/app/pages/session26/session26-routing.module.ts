import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Session26Component } from './session26.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { StudioComponent } from './studio/studio.component';

const routes: Routes = [
  // localhost:4200/session26
  {
    path: 'session26',
    component: Session26Component,
    children: [
      { path: '', redirectTo: 'signin', pathMatch: 'full' },
      // localhost:4200/session26/signin
      { path: 'signin', component: SigninComponent },
      // localhost:4200/session26/signup
      { path: 'signup', component: SignupComponent },
      // localhost:4200/session26/studios
      // Untuk mengimplementasikan guard-nya, bisa kita tambahkan property
      // canActivate yang bertipe data Array, lalu masukkan AuthGuard di dalamnya
      // seperti pada contoh ini.
      { path: 'studios', component: StudioComponent, canActivate: [AuthGuard] },
    ]
  }
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
export class Session26RoutingModule { }
