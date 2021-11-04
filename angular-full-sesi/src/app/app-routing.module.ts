import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

// Ini adalah root router.
// Routing dipisah berdasarkan session yang kalian ingin buka,
// dan kalian akan temukan di setiap Session module pada direktori pages

const routes: Routes = [
  // untuk redirect berdasarkan path
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  // load component berdasarkan path yang dituju
  { path: 'home', component: HomeComponent },

  // jika tidak ada path yang sama, Angular akan load ini
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
