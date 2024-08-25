import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ProductsModule } from '../../products.module';
import { Color, Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from "../../pipes/canFly.pipe";


@Component({
  selector: 'products-order',
  standalone: true,
  imports: [
    PrimeNgModule,
    ProductsModule,
    CanFlyPipe
],
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly:true,
      color: Color.green
    },
  ]

  toggleUpperCase():void {
    this.isUpperCase = !this.isUpperCase
  }


}
