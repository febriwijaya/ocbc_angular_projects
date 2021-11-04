import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { Session19Module } from './pages/session19/session19.module';
import { Session20Module } from './pages/session20/session20.module';
import { Session21Module } from './pages/session21/session21.module';
import { Session22Module } from './pages/session22/session22.module';
import { Session23Module } from './pages/session23/session23.module';
import { Session24Module } from './pages/session24/session24.module';
import { Session25Module } from './pages/session25/session25.module';
import { Session26Module } from './pages/session26/session26.module';
import { Session27Module } from './pages/session27/session27.module';

import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomeComponent } from './pages/home/home.component';
import { ClickablesModule } from './components/clickables/clickables.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,

    ClickablesModule,

    // NOTE:
    // "Posisi menentukan prestasi" ya...
    // Karena kita menggunaan routing di setiap feature module,
    // maka AppRoutingModule harus ditaruh di paling akhir!

    // Karena jika tidak, maka component PageNotFound akan selalu di-load,
    // meskipun route yang sudah kita buat itu sudah benar.

    Session19Module,
    Session20Module,
    Session21Module,
    Session22Module,
    Session23Module,
    Session24Module,
    Session25Module,
    Session26Module,
    Session27Module,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
