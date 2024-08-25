import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
  standalone: true,
})
export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean): 'Vuela' | 'No vuela' {
    return (canFly)
    ? 'Vuela'
    : 'No vuela';
  }

}
