import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exclaim',
  standalone: true
})
export class ExclaimPipe implements PipeTransform {

  transform(value: string, times: number = 1): string {
    return value + '!'.repeat(times);
  }

}
