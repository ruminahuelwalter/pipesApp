import { Component } from '@angular/core';
import { FieldsetModule } from 'primeng/fieldset';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'app-uncommon-page',
  standalone: true,
  imports: [
    FieldsetModule,
    PrimeNgModule
  ],
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {

}
