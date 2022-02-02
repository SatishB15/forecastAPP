import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environment';

@Pipe({
  name: 'icon'
})
export class IconPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    return `${ environment.ICON_URL+value}@2x.png`;
  }

}
