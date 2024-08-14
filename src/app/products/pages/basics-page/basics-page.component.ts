import { Component } from '@angular/core';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basics-page',
  standalone: true,
  imports: [
    CommonModule,
    PrimeNgModule
  ],
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPageComponent {
  public nameLower: string = 'walter';
  public nameUpper: string = 'WALTER';
  public fullName: string = 'wAlTeR';

  public customDate: Date = new Date();
  
}
