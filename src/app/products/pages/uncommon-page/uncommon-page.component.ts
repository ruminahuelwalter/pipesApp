import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { I18nSelectPipe } from '@angular/common';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    FieldsetModule,
    PrimeNgModule,
    I18nSelectPipe
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
   // i18Select
  public name: string = 'Walter';
  public gender: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  changeClient():void {
    this.name = 'Melissa';
    this.gender= 'female'
   }
}
