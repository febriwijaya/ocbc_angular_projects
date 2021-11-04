import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { Session25Component } from './session25.component';

// router untuk feature module dapat kalian buat dengan argument...
//     --routing

// ...ketika kalian membuat module baru dengan
//     ng g module <NAMA_MODULE>

// contoh:
//     ng g[enerate] module <NAMA_MODULE> --routing

const routes: Routes = [
  // NOTE khusus feature module routing:

  // Angular tidak akan load berdasarkan direktori module routing berada,
  // maka kita harus menambahkan path-nya secara manual.

  // Untuk contohnya, kalian ikuti cara berikut:
  {
    path: 'session25',
    component: Session25Component,
    // Note: Agar children component berikut dapat ter-load dengan baik,
    //       kita harus menambahkan <router-outlet> di component template
    //       pada component yang di-load pada feature module di atas.

    //       Buka file session25.component.html untuk lebih jelasnya.
    children: [
      // Child route akan otomatis memiliki path prefix, mengikuti parent
      // route yang kita set.

      // Contohnya, jika kita menggunakan redirectTo, maka
      // route di bawah ini akan redirect langsung ke
      // /session25/products jika route yang dibuka adalah /session25.
      { path: '', redirectTo: 'products', pathMatch: 'full' },

      // Atau: /session25/products
      { path: 'products', component: ProductsComponent },
      // Atau: /session25/products/:id
      // Seperti: /session25/products/1
      { path: 'products/:id', component: ProductDetailsComponent },
    ]
  }
];

@NgModule({
  // WARNING!
  // Untuk mencegah error 'router-outlet' is not a known element,
  // kalian WAJIB menambahkan declarations yang berisi component utama
  // di sini.
  declarations: [Session25Component],

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Session25RoutingModule { }
