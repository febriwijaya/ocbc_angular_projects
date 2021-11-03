import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CountryDetailComponent } from './components/country-detail/country-detail.component';
import { AllCountriesComponent } from './components/all-countries/all-countries.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'country-detail/:id', component: CountryDetailComponent },
  { path: 'all-countries', component: AllCountriesComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
