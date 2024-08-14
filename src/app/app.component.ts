import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { SharedModule } from './shared/shared.module';
import localeEsAR from '@angular/common/locales/es-AR';
import { registerLocaleData } from '@angular/common';
import localeFrCA from '@angular/common/locales/fr-CA'

registerLocaleData(localeEsAR)
registerLocaleData(localeFrCA)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ButtonModule,
    SharedModule,
       
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig) {}
  title:string = ''
  ngOnInit() {
      this.primengConfig.ripple = true;
  }
}
