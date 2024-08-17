import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ToggleCasePipe } from './pipes/toggle-case.pipe';


@NgModule({
  declarations: [
    ToggleCasePipe
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
  ],
  exports: [
    ToggleCasePipe
  ]
})
export class ProductsModule { }
