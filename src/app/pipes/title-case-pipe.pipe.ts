import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCasePipe',
  standalone: true
})
export class TitleCasePipePipe implements PipeTransform {

  // Transforma el valor a título capitalizando la primera letra de cada palabra
  transform(value: string): string {
    return value.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

}
