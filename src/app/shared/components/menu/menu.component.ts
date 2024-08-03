import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { PrimeNgModule } from '../../../prime-ng/prime-ng.module';

@Component({
  selector: 'shared-menu',
  standalone: true,
  imports: [PrimeNgModule],
  templateUrl: './menu.component.html',
  styles: ``
})

export class MenuComponent implements OnInit {
  public menuItems: MenuItem[] | undefined;

  ngOnInit() {
      this.menuItems = [
          { label: 'New', icon: 'pi pi-plus' },
          { label: 'Search', icon: 'pi pi-search' }
      ];
  }
}
