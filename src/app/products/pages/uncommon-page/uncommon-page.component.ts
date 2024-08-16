import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';
import { I18nSelectPipe, I18nPluralPipe, SlicePipe, JsonPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    CommonModule,
    FieldsetModule,
    I18nPluralPipe,
    I18nSelectPipe,
    JsonPipe,
    PrimeNgModule,
    SlicePipe,
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

  // i18nPlural
  public clients: string[]= ['Walter', 'Emanuel', 'Maria', 'Azul'];

  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos 1 cliente esperando',
    '=2': 'tenemos 2 personas esperando',
    'other': 'tenemos # clientes esperando',
  }

  public deleteClient(): void{
    this.clients.shift();
  }

  // KeyValue Pipe
  public person = {
    name: 'Walter',
    age: 31,
    adress: 'Gualjaina, Chubut'
  }
}
