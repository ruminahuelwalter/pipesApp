import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ProductsModule } from '../../products.module';


@Component({
  selector: 'products-order',
  standalone: true,
  imports: [
    PrimeNgModule,
    ProductsModule
  ],
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;


  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase
  }
}
