import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { ProductsModule } from '../../products.module';
import { Color, Hero } from '../../interfaces/hero.interface';
import { CanFlyPipe } from "../../pipes/canFly.pipe";
import { SortByPipe } from "../../pipes/sort-by.pipe";


@Component({
  selector: 'products-order',
  standalone: true,
  imports: [
    PrimeNgModule,
    ProductsModule,
    CanFlyPipe,
    SortByPipe
],
  templateUrl: './order.component.html',
  styles: ``
})
export class OrderComponent {

  public isUpperCase: boolean = false;
  //public orderBy: keyof Hero | undefined | '' = '';
  public orderBy?: keyof Hero;

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

  changeOrder( value: keyof Hero) {
    this.orderBy = value; 
  }
 
}
