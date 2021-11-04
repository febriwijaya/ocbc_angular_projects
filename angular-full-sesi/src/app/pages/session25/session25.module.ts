import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { Session25RoutingModule } from './session25-routing.module';
import { ClickablesModule } from 'src/app/components/clickables/clickables.module';


@NgModule({
  declarations: [
    ProductsComponent,
    ProductDetailsComponent,
  ],
  imports: [
    CommonModule,
    Session25RoutingModule,
    ClickablesModule
  ]
})
export class Session25Module { }
