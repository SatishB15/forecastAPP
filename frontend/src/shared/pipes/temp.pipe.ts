import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'temp'
})
export class TempPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return Math.round(value - 273);
  }

}
